// schemas/fields/mitglied/bilder.ts
import { defineField } from 'sanity'

export const bilder = [
  defineField({
    name: 'logo',
    title: 'Logo',
    type: 'image',
    options: { hotspot: true }
  }),
  defineField({
    name: 'titelbild',
    title: 'Titelbild (z. B. für Mini-Website)',
    type: 'image',
    options: { hotspot: true }
  }),
  defineField({
    name: 'bildergalerie',
    title: 'Bildergalerie',
    type: 'array',
    of: [
      {
        type: 'image',
        options: { hotspot: true }
      }
    ]
  })
]
