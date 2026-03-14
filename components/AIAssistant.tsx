'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue
    setInputValue('')
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            ...messages,
            { role: 'user', content: userMessage },
          ],
        }),
      })

      if (!response.ok) throw new Error('Failed to get response')

      const data = await response.json()
      setMessages((prev) => [...prev, { role: 'assistant', content: data.text || data.content || 'I could not generate a response.' }])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full transition-all duration-300 bg-gradient-to-br from-[#00D4FF] to-[#4A9EFF] text-white shadow-lg hover:shadow-xl"
        title="AI Assistant"
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[70vh] sm:h-[500px] rounded-2xl shadow-2xl overflow-hidden bg-[#0A1628] text-white border border-[#1A3A5C] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#1A3A5C]">
              <div>
                <h3 className="font-semibold text-lg">CB Assistant</h3>
                <p className="text-xs text-[#7BC8FF]">
                  Ask me anything about our services
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded hover:bg-[#00D4FF]/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0A1628]">
              {messages.length === 0 && !isLoading && (
                <div className="text-center text-sm text-[#7BC8FF]">
                  <p className="mb-2">Hey there!</p>
                  <p>I'm here to help answer any questions about CB InfoTech's services, pricing, and capabilities.</p>
                </div>
              )}
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    'flex gap-3',
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      'max-w-xs px-4 py-2 rounded-lg break-words text-sm',
                      message.role === 'user'
                        ? 'bg-[#00D4FF]/20 text-white'
                        : 'bg-[#0D2137] text-[#E8F4FF]'
                    )}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 text-[#7BC8FF]"
                >
                  <span>●</span>
                  <span>●</span>
                  <span>●</span>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-[#1A3A5C]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask a question..."
                  disabled={isLoading}
                  className="flex-1 px-3 py-2 rounded border bg-[#0D2137] border-[#1A3A5C] text-white placeholder-[#7BC8FF]/50 outline-none focus:border-[#00D4FF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  className="p-2 rounded bg-[#00D4FF]/20 text-[#00D4FF] hover:bg-[#00D4FF]/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
