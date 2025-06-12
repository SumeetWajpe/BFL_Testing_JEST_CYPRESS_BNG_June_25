import { TestBed } from "@angular/core/testing";
import { PokemonService } from "../services/pokemon.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FilterPokemonPipe } from "./filter-pokemon.pipe";

describe("test suite for Filter Pokemon Pipe", () => {
  let pokemonServObj: PokemonService;
  let pipe: FilterPokemonPipe;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonService],
      imports: [HttpClientTestingModule],
    });
    pokemonServObj = TestBed.inject(PokemonService); // service instance
    pipe = new FilterPokemonPipe(pokemonServObj);
  });

  it("should return the input array if no filter is applied", () => {
    // mocked Result & input array
    const pokemonArr = [
      {
        id: 1,
        name: "Pikachu",
        types: [{ type: { name: "electric" } }],
      },
      {
        id: 2,
        name: "Bulbasaur",
        types: [{ type: { name: "grass" } }],
      },
      {
        id: 3,
        name: "Charmander",
        types: [{ type: { name: "fire" } }],
      },
    ];

    const args = { searchText: "", types: [], genders: [] }; // search criteria
    // Call the pipe transform method
    const result = pipe.transform(pokemonArr, args);
    // Expect the result to be the same as the input array
    expect(result).toEqual(pokemonArr);
  });
});
