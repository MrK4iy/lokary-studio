import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'branchenkategorie',
  title: 'Branchenkategorie',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titel', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'beschreibung', title: 'Beschreibung', type: 'text' })
  ]
})
