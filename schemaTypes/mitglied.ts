import { defineType } from 'sanity'

export default defineType({
  name: 'mitglied',
  title: 'Mitglied',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'beschreibung', title: 'Beschreibung', type: 'text' },
  ],
})
