import type { ConnectionRecord } from '@aries-framework/core'

import { useConnections } from '@aries-framework/react-hooks'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList } from 'react-native'

import { backgroundColor } from '../globalStyles'

import { ContactListItem, Text } from 'components'

const ListContacts: React.FC = () => {
  const { connections } = useConnections()
  const { t } = useTranslation()

  return (
    <FlatList
      data={connections}
      renderItem={({ item }) => <ContactListItem contact={item} />}
      keyExtractor={(item: ConnectionRecord) => item.did}
      style={{ backgroundColor }}
      ListEmptyComponent={() => <Text style={{ textAlign: 'center', margin: 100 }}>{t('None yet!')}</Text>}
    />
  )
}

export default ListContacts
