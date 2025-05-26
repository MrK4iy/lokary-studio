// schemas/fields/mitglied/meta.ts
import { defineField } from 'sanity'

export const meta = [
  defineField({
    name: 'mitgliedStatus',
    title: 'Mitgliedsstatus',
    type: 'string',
    options: {
      list: ['kostenlos', 'unterstützer', 'premium'],
      layout: 'radio'
    },
    initialValue: 'kostenlos'
  }),
  defineField({
    name: 'status',
    title: 'Status',
    type: 'string',
    options: {
      list: ['aktiv', 'in Prüfung', 'archiviert']
    },
    initialValue: 'in Prüfung'
  }),
  defineField({
    name: 'zeitstempel',
    title: 'Letzte Änderung',
    type: 'datetime',
    readOnly: () => true
  })
]
