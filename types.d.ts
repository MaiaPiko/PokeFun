interface Pokemon {
    name: string;
    url: string;
    base_happiness: number;
    sprites: PokemonSprite;

    
  }
  

  interface Ability {
    ability: {
      name: string;
      url: string;
    };
  }
  
 

  interface PokeApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
    sprites:string;
    ability:string;
    abilities: Ability[];

  
  }

  type PaginationProps = {
    pageTotal: number;
    pageNumber:string;

  };


  interface BoxProps {
    title: text;
  }

  interface Ability {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }
  
  interface Form {
    name: string;
    url: string;
  }
  
  interface Version {
    name: string;
    url: string;
  }
  
  interface GameIndex {
    game_index: number;
    version: Version;
  }
  interface AbilityDetail {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
    // Add other ability-related fields if necessary
  }
  
 
  
  interface PokeApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
    name:string
    sprites: PokemonSprite;

  }
  


  interface FlavorTextEntry {
    flavor_text: string;
    language: {
      name: string;
    };
  }

interface PokeDetails {
  name:string;
  base_happiness: number;
  url:string;
}

interface Evolves_from_species {
  name:string | null;
  url:string;
}

interface GrowthRate{
  name: string;
  url:string;
}

interface Shape{
  name:string | null;
  url:string;
}

interface Color{
  name:string | null;
}
  interface PokemonDetails {
    abilities: AbilityDetail[];
    base_happiness: number;
    growth_rate: GrowthRate;
    flavor_text_entries: FlavorTextEntry[];
    name: string;
    results: PokeDetails;
    capture_rate:number;
    evolves_from_species: Evolves_from_species;
    has_gender_differences:boolean;
    hatch_counter:number;
    id:number;
    is_baby:boolean;
    is_legendary:boolean;
    is_mythical:boolean;
    order:number;
    shape: Shape;
    color:Color;
    types:string[]

  }


  interface QuizData{
    answers: string[]; correctAnswer: string; randomPicture: string; 
  }

  interface OfficialArt {
    front_default: string;
    front_shiny: string;
  }

  interface OtherSprites {
    "official-artwork":OfficialArt
  }

  interface PokemonSprite {
    sprites: {
      other: OtherSprites;
    };
  }
  
  interface PokeImage{
    sprites: PokemonSprite;

  }


  interface PokemonQuizData {
    answers: string[];
    correctAnswer: string;
    randomPicture: string;
 
}

interface PokemonArtworkQuiz {
  officialDefault: string;
  officialShiny: string;
}


