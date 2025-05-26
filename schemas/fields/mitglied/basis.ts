// schemas/fields/mitglied/basis.ts
import { defineField } from 'sanity'

export const basis = [
  defineField({ name: 'name', title: 'Name des Unternehmens', type: 'string', validation: Rule => Rule.required() }),
  defineField({ name: 'slug', title: 'URL-Slug', type: 'slug', options: { source: 'name', maxLength: 96 }, validation: Rule => Rule.required() }),
  defineField({ name: 'branchenkategorie', title: 'Branchenkategorie', type: 'reference', to: [{ type: 'branchenkategorie' }], validation: Rule => Rule.required() })
]
