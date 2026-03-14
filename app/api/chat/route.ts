const systemPrompt = `You are CB InfoTech's intelligent assistant, a friendly and knowledgeable guide for all things web development, design, and digital solutions.

About CB InfoTech:
- We specialize in building fast, modern websites and web applications
- Our expertise includes MERN stack, Next.js, React, Node.js, and cloud deployment
- We serve businesses of all sizes, from startups to enterprises
- Our pricing tiers:
  * Starter: ₹12,999 - Perfect for small businesses and portfolios (5-8 page websites)
  * Professional: ₹35,999 - For growing businesses (e-commerce stores, CMS, 6 months support)
  * Enterprise: ₹75,000+ - Custom applications, CRM, portals, with 24/7 support
- We provide ongoing support and maintenance for all projects
- Our team focuses on performance, user experience, and cutting-edge technology

Your role:
1. Answer questions about our services (web development, e-commerce, CMS, CRM, etc.)
2. Explain our pricing tiers and help clients choose the right plan
3. Discuss technology stacks and why we use them
4. Help with general web development questions
5. Guide visitors through the project process
6. Be enthusiastic about technology and design

Be conversational, helpful, and always try to understand the customer's specific needs. If they ask about pricing or services, provide accurate information about our offerings. Encourage them to contact our team for custom quotes or specific project discussions.`

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Build messages array with proper format
    const messagesForAPI = [
      { role: 'system', content: systemPrompt },
      ...messages,
    ]

    // Smart response generation
    const userMessage = messages[messages.length - 1]?.content || ''
    let responseText = generateSmartResponse(userMessage)

    return Response.json({ text: responseText })
  } catch (error) {
    console.error('Chat API error:', error)
    return Response.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    )
  }
}

// Generate intelligent responses based on keywords and context
function generateSmartResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase().trim()

  // Pricing related questions
  if (/price|cost|budget|afford|rate|quote|how much/i.test(lowerMessage)) {
    if (/starter|beginner|small|basic/i.test(lowerMessage)) {
      return `Perfect! The **Starter package (₹12,999)** is ideal for businesses just getting online:\n\n✓ 5-8 page responsive website\n✓ Mobile-first design\n✓ Contact forms & basic CMS\n✓ Free domain for 1st year\n✓ SEO optimization\n✓ SSL certificate included\n✓ 2 months of free support\n\nThis is our most budget-friendly option and perfect for establishing your online presence!`
    }
    if (/professional|ecommerce|store|shop|grow|growing/i.test(lowerMessage)) {
      return `Great choice! The **Professional package (₹35,999)** is our most popular and perfect for growing businesses:\n\n✓ Everything in Starter +\n✓ E-commerce store (up to 100 products)\n✓ Payment gateway integration\n✓ Advanced CMS & admin panel\n✓ Custom animations & effects\n✓ 6 months of support & maintenance\n✓ Analytics & reporting\n✓ API integrations\n\nIncludes 1 month of free maintenance! This tier scales with your growth.`
    }
    if (/enterprise|complex|custom|large|crm|portal|unlimited/i.test(lowerMessage)) {
      return `Excellent! For larger projects, our **Enterprise package (₹75,000+)** offers unlimited possibilities:\n\n✓ Fully custom web applications\n✓ Unlimited e-commerce products\n✓ CRM/ERP/Management portals\n✓ Advanced feature development\n✓ Cloud infrastructure setup\n✓ DevOps & CI/CD pipeline\n✓ 1 year support + Annual Maintenance Contract\n✓ Priority 24/7 support\n✓ Dedicated account manager\n\nPricing is custom based on your specific requirements. Let's discuss your needs!`
    }
    return `Our pricing is flexible and transparent:\n\n💰 **Starter**: ₹12,999/project - Perfect for small businesses\n💰 **Professional**: ₹35,999/project - Most popular for growing businesses\n💰 **Enterprise**: ₹75,000+/project - Custom solutions for complex needs\n\nEach package includes quality assurance, optimization, and ongoing support. Would you like to know which plan fits your needs best?`
  }

  // Service related questions
  if (/service|build|develop|create|what do you|can you/i.test(lowerMessage)) {
    if (/website|web design|portfolio|branding/i.test(lowerMessage)) {
      return `We specialize in building stunning, high-performance websites! Our services include:\n\n🌐 **Custom Website Design** - Tailored to your brand and audience\n📱 **Responsive Design** - Perfect on all devices\n⚡ **Performance Optimization** - Lightning-fast loading times\n🔍 **SEO Ready** - Built for search visibility\n🎨 **Modern Design** - Contemporary, conversion-focused layouts\n\nWhether you're a startup or established business, we create digital experiences that convert visitors into customers. Ready to discuss your website idea?`
    }
    if (/ecommerce|store|shop|product|selling|payment/i.test(lowerMessage)) {
      return `Perfect! We build full-featured e-commerce solutions:\n\n🛒 **E-commerce Stores** - From 1 to unlimited products\n💳 **Payment Integration** - Secure payment gateways\n📊 **Inventory Management** - Real-time stock tracking\n🔐 **Security** - PCI compliant and encrypted\n📈 **Conversion Focused** - Designed to increase sales\n📱 **Mobile Optimized** - Seamless shopping experience\n\nWe've helped many businesses launch successful online stores. What type of products do you want to sell?`
    }
    if (/cms|admin|management|control/i.test(lowerMessage)) {
      return `We build powerful CMS platforms that give you complete control:\n\n🎛️ **Advanced Admin Panels** - Easy content management\n📝 **Content Management System** - Update content without coding\n👥 **User Management** - Control permissions and roles\n📊 **Analytics Dashboard** - Track important metrics\n⚙️ **Automation Tools** - Streamline repetitive tasks\n🔌 **Integration Ready** - Works with your existing tools\n\nManage your website like a pro without technical knowledge!`
    }
    if (/crm|erp|portal|business|management system/i.test(lowerMessage)) {
      return `We develop custom business solutions tailored to your workflows:\n\n💼 **CRM Systems** - Manage customer relationships efficiently\n📋 **ERP Solutions** - Streamline your entire operation\n🔗 **Client Portals** - Give clients secure access\n📊 **Custom Dashboards** - Real-time business intelligence\n🔄 **Workflow Automation** - Reduce manual work\n🔐 **Data Security** - Enterprise-grade protection\n\nThese are complex projects that need a dedicated team. Let's discuss your requirements!`
    }
    return `We offer comprehensive web development services:\n\n✓ Business Websites\n✓ E-commerce Stores\n✓ Custom Web Applications\n✓ CMS & Admin Panels\n✓ CRM & ERP Systems\n✓ Website Redesigns\n✓ API Integrations\n✓ Performance Optimization\n\nWhat specific service are you interested in? I can give you more details!`
  }

  // Technology questions
  if (/technology|tech|stack|framework|language|how.*build|what.*use/i.test(lowerMessage)) {
    return `We use modern, industry-leading technologies:\n\n🎨 **Frontend**: React, Next.js, TypeScript, Tailwind CSS, Framer Motion\n⚙️ **Backend**: Node.js, Express, Python, PostgreSQL, MongoDB\n☁️ **Infrastructure**: AWS, Vercel, Docker, GitHub Actions\n🛠️ **Tools**: Git, Figma, Jest, ESLint, Webpack\n\n**Why these technologies?**\n- ⚡ Fast performance and quick load times\n- 📱 Works perfectly on all devices\n- 🔒 Enterprise-grade security\n- 📈 Highly scalable as you grow\n- 🔧 Easy to maintain and update\n\nWe choose the best tech for your specific project needs!`
  }

  // Timeline questions
  if (/timeline|how long|duration|take|month|week|finish|complete/i.test(lowerMessage)) {
    if (/website|simple|basic|small/i.test(lowerMessage)) {
      return `For a basic website, here's what to expect:\n\n📅 **Simple Website**: 2-3 weeks\n📅 **Medium Website**: 3-4 weeks\n📅 **Complex Website**: 4-6 weeks\n\n⏱️ This includes:\n- Initial consultation & planning\n- Design & development\n- Testing & optimization\n- Deployment\n\nWe break it into milestones so you see progress every week!`
    }
    if (/ecommerce|store|app|application|custom/i.test(lowerMessage)) {
      return `For larger projects, timelines vary:\n\n📅 **E-commerce Store**: 3-4 weeks\n📅 **Custom Web App**: 4-12 weeks (depends on complexity)\n📅 **CRM/ERP System**: 8-16 weeks\n\n⏱️ The timeline depends on:\n- Project complexity\n- Number of features\n- Integrations needed\n- Your feedback cycles\n\nWe'll give you a detailed timeline once we understand your requirements!`
    }
    return `Project timelines vary based on scope and complexity:\n\n⏱️ Simple projects: 2-3 weeks\n⏱️ Medium projects: 4-6 weeks\n⏱️ Complex applications: 8-16 weeks\n\nWe work in sprints with regular updates so you're always informed. Tell me about your project and I can give you a better estimate!`
  }

  // Support questions
  if (/support|maintain|maintain|maintain|bug|issue|update|secure|amc/i.test(lowerMessage)) {
    return `We provide excellent ongoing support:\n\n🛡️ **Starter Plan**: 2 months of free support\n🛡️ **Professional Plan**: 6 months of support & maintenance\n🛡️ **Enterprise Plan**: 1 year support + Annual Maintenance Contract\n\n📋 **Support includes**:\n✓ Bug fixes and patches\n✓ Security updates\n✓ Performance monitoring\n✓ Server management\n✓ Content updates\n✓ Priority response time\n\nWe keep your website secure, fast, and running smoothly 24/7!`
  }

  // Contact questions
  if (/contact|reach|call|email|chat|phone|message|how to.*you/i.test(lowerMessage)) {
    return `Great! You can reach us multiple ways:\n\n📧 **Email**: hello@cbinfotech.in\n📱 **WhatsApp**: +91 98765 43210\n📍 **Location**: India\n⏰ **Response Time**: Within 24 hours\n\n💬 You can also:\n✓ Continue chatting with me for more info\n✓ Fill out our contact form on the website\n✓ Schedule a consultation\n\nWe're here to help turn your ideas into reality!`
  }

  // Process & workflow questions
  if (/process|how.*work|workflow|step|phase|stage/i.test(lowerMessage)) {
    return `Our project process is transparent and collaborative:\n\n**1️⃣ Consultation** (Day 1-2)\n- Understand your goals and requirements\n- Discuss budget and timeline\n- Define project scope\n\n**2️⃣ Design** (Week 1-2)\n- Create wireframes and mockups\n- Get your feedback and approval\n- Prepare development plan\n\n**3️⃣ Development** (Week 3-6)\n- Build with modern technologies\n- Regular progress updates\n- Code reviews and quality checks\n\n**4️⃣ Testing & Deployment** (Week 7)\n- Comprehensive testing\n- Performance optimization\n- Live deployment\n\n**5️⃣ Support** (Ongoing)\n- Monitor performance\n- Handle updates and fixes\n- Continuous improvement\n\nWould you like to start your project?`
  }

  // General questions
  if (/why|choose|difference|better|advantage|best/i.test(lowerMessage)) {
    return `Here's why businesses choose CB InfoTech:\n\n🏆 **Experience**: 50+ successful projects delivered\n⚡ **Performance**: Sub-2 second load times\n😊 **Satisfaction**: 100% client satisfaction rate\n💡 **Innovation**: Latest technologies and best practices\n🤝 **Partnership**: We're invested in your success\n📞 **Support**: Dedicated team available for you\n💰 **Value**: Best quality for your investment\n\nWe don't just build websites—we build digital assets that drive your business growth. Ready to see what we can do for you?`
  }

  // Default response for unknown queries
  return `That's a great question! While I might not have a specific answer, here's what I can help you with:\n\n📌 **Services** - Website design, e-commerce, apps, CRM systems\n💰 **Pricing** - Our packages and what's included\n⚙️ **Technology** - Modern tech stack we use\n📅 **Timeline** - How long projects take\n🛡️ **Support** - Ongoing maintenance and updates\n📞 **Contact** - How to reach our team\n\nFeel free to ask about any of these topics, or scroll down to fill out our contact form for a personalized consultation!`
}
