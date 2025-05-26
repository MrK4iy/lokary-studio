// schemas/fields/mitglied/gpt.ts
import { defineField } from 'sanity'

export const gpt = [
  defineField({
    name: 'beschreibungAuto',
    title: 'GPT: Beschreibung (automatisch)',
    type: 'text',
    readOnly: () => true
  }),
  defineField({
    name: 'kurzprofilAuto',
    title: 'GPT: Kurzprofil (automatisch)',
    type: 'text',
    readOnly: () => true
  })
]
