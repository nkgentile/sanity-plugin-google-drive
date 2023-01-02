import React, {memo, useMemo} from 'react'
import {Card, Flex, Grid, Stack, Text} from '@sanity/ui'
import {AspectRatio} from './AspectRatio'
import {AssetPreviewProps} from './AssetPreviewProps'
import {GoogleDriveButton} from './GoogleDriveButton'

const EmptyAsset = memo(function EmptyAsset() {
  return (
    <Card
      as={AspectRatio}
      flex={1}
      tone="transparent"
      padding={4}
      radius={2}
      height="stretch"
      // @ts-expect-error AspectRatioProps
      ratio={21 / 9}
    >
      <Flex align="center" justify="center" height="fill">
        <Text size={1} muted>
          No asset selected
        </Text>
      </Flex>
    </Card>
  )
})

export function AssetEmbed(props: AssetPreviewProps) {
  const {value, children} = props

  const embed = useMemo(
    () =>
      value?.embedUrl ? (
        <AspectRatio ratio={21 / 9}>
          <iframe src={value.embedUrl} />
        </AspectRatio>
      ) : (
        <EmptyAsset />
      ),
    [value?.embedUrl]
  )

  return (
    <Stack space={2}>
      <Grid gap={1} style={{gridTemplateColumns: '1fr min-content'}}>
        {children}
        <GoogleDriveButton
          disabled={!value?.url}
          href={value?.url}
          text={GoogleDriveButton.defaultText}
        />
      </Grid>
      {embed}
    </Stack>
  )
}
