import type { ReactNode } from "react"

export interface TermItem {
  word: string
  def: string
}

export interface PillarItem {
  icon: string
  name: string
  def: string
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  terms?: TermItem[]
  pillars?: PillarItem[]
}

export interface SectionProps extends Section {
  isActive: boolean
}
