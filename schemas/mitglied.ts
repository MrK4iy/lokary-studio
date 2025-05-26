// schemas/mitglied.ts
import { defineType } from 'sanity'

import { basis } from './fields/mitglied/basis'
import { bilder } from './fields/mitglied/bilder'
import { kontakt } from './fields/mitglied/kontakt'
import { inhalte } from './fields/mitglied/inhalte'
import { gpt } from './fields/mitglied/gpt'
import { meta } from './fields/mitglied/meta'

export default defineType({
  name: 'mitglied',
  title: 'Mitglied',
  type: 'document',
  fields: [
    ...basis,
    ...bilder,
    ...kontakt,
    ...inhalte,
    ...gpt,
    ...meta
  ]
})
