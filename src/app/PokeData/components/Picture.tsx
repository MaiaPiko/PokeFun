import fetchPokemonArtwork from '@/lib/fetchPokemonArtwork'
import React from 'react'
import Image from 'next/image'

export default async function Picture({pokemon}:{pokemon:string}) {
    const picture = await fetchPokemonArtwork(pokemon)
  return (
    <>
    <Image src={picture} width={30} height={30} alt={`${pokemon} image`}/>
    </>
  )
}
