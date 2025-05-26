// schemas/fields/mitglied/kontakt.ts
import { defineField } from 'sanity'

export const kontakt = [
  defineField({
    name: 'adresse',
    title: 'Adresse',
    type: 'object',
    fields: [
      defineField({ name: 'strasse', title: 'Straße', type: 'string' }),
      defineField({ name: 'plz', title: 'Postleitzahl', type: 'string' }),
      defineField({ name: 'ort', title: 'Ort', type: 'string' })
    ]
  }),
  defineField({
    name: 'kontaktmoeglichkeiten',
    title: 'Kontaktmöglichkeiten',
    type: 'object',
    fields: [
      defineField({ name: 'telefon', title: 'Telefonnummer', type: 'string' }),
      defineField({ name: 'email', title: 'E-Mail-Adresse', type: 'string' }),
      defineField({ name: 'kontaktformularUrl', title: 'URL zum Kontaktformular', type: 'url' })
    ]
  }),
  defineField({
    name: 'oeffnungszeiten',
    title: 'Öffnungszeiten',
    type: 'array',
    of: [
      {
        type: 'object',
        name: 'zeitfenster',
        fields: [
          defineField({ name: 'tag', title: 'Tag', type: 'string' }),
          defineField({ name: 'von', title: 'Von (z. B. 08:00)', type: 'string' }),
          defineField({ name: 'bis', title: 'Bis (z. B. 18:00)', type: 'string' })
        ]
      }
    ]
  })
]
