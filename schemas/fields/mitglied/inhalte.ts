// schemas/fields/mitglied/inhalte.ts
import { defineField } from 'sanity'

export const inhalte = [
  defineField({
    name: 'leistungen',
    title: 'Leistungen / Angebote',
    type: 'array',
    of: [{ type: 'string' }]
  }),
  defineField({
    name: 'zielgruppe',
    title: 'Zielgruppe',
    type: 'string'
  }),
  defineField({
    name: 'vorteile',
    title: 'Besondere Vorteile',
    type: 'array',
    of: [{ type: 'string' }]
  }),
  defineField({
    name: 'besonderheiten',
    title: 'Besonderheiten',
    type: 'text'
  }),
  defineField({
    name: 'gruendungsjahr',
    title: 'Gründungsjahr',
    type: 'number'
  }),
  defineField({
    name: 'templateType',
    title: 'Template-Typ',
    type: 'string',
    options: {
      list: ['Beratung', 'Handwerk', 'Shop', 'Kreativ', 'Dienstleistung']
    }
  })
]
