type TelegramSendOptions = {
  text: string
  parseMode?: 'HTML' | 'MarkdownV2'
}

export async function sendTelegramMessage({
  text,
  parseMode,
}: TelegramSendOptions): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    console.warn(
      'Telegram notification skipped: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set',
    )
    return
  }

  const url = `https://api.telegram.org/bot${token}/sendMessage`
  const body: Record<string, unknown> = {
    chat_id: Number(chatId) || chatId,
    text,
    disable_web_page_preview: true,
  }
  if (parseMode) body.parse_mode = parseMode

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
    // Avoid hanging the API route if Telegram is slow.
    signal: AbortSignal.timeout(5000),
  })

  if (!response.ok) {
    const detail = await response.text().catch(() => '')
    throw new Error(
      `Telegram sendMessage failed (${response.status}): ${detail}`,
    )
  }
}

const PROJECT_TYPE_LABEL: Record<string, string> = {
  'business-website': 'Business Website',
  'website-redesign': 'Website Redesign',
  'saas-mvp': 'SaaS / Startup MVP',
  dashboard: 'Dashboard / System',
  other: 'Other',
}

const BUDGET_LABEL: Record<string, string> = {
  '<500': 'Under $500',
  '500-2k': '$500 – $2k',
  '2k-5k': '$2k – $5k',
  '5k+': '$5k+',
}

const TIMELINE_LABEL: Record<string, string> = {
  asap: 'ASAP',
  '1-2-weeks': '1–2 weeks',
  '1-month': '1 month',
  flexible: 'Flexible',
}

const GOAL_LABEL: Record<string, string> = {
  'more-customers': 'Get more customers',
  'brand-image': 'Improve brand image',
  automation: 'Automate business processes',
  'launch-startup': 'Launch startup idea',
  other: 'Other',
}

type LeadPayload = {
  name: string
  email: string
  company?: string
  phone?: string
  projectType: string
  budget: string
  description: string
  goals?: string[]
  timeline: string
}

export function formatLeadMessage(lead: LeadPayload): string {
  const lines: string[] = []
  lines.push('🚀 New lead from mg-wunna.com')
  lines.push('')
  lines.push(`👤 ${lead.name}`)
  lines.push(`📧 ${lead.email}`)
  if (lead.company) lines.push(`🏢 ${lead.company}`)
  if (lead.phone) lines.push(`📱 ${lead.phone}`)
  lines.push('')
  lines.push(
    `🧩 Project: ${PROJECT_TYPE_LABEL[lead.projectType] ?? lead.projectType}`,
  )
  lines.push(`💰 Budget: ${BUDGET_LABEL[lead.budget] ?? lead.budget}`)
  lines.push(`⏱  Timeline: ${TIMELINE_LABEL[lead.timeline] ?? lead.timeline}`)
  if (lead.goals && lead.goals.length > 0) {
    const goals = lead.goals.map((g) => GOAL_LABEL[g] ?? g).join(', ')
    lines.push(`🎯 Goals: ${goals}`)
  }
  lines.push('')
  lines.push('📝 Description:')
  lines.push(lead.description)
  return lines.join('\n')
}
