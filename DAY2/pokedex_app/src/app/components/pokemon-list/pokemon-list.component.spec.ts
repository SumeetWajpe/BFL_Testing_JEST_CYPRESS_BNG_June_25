import { TestBed } from "@angular/core/testing";
import { PokemonListComponent } from "./pokemon-list.component";
import { PokemonItemComponent } from "../pokemon-item/pokemon-item.component";
import { FilterPokemonPipe } from "src/app/shared/pipes/filter-pokemon.pipe";
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { StatsFilterComponent } from "src/app/shared/components/stats-filter/stats-filter.component";
import { DialogComponent } from "src/app/shared/components/dialog/dialog.component";
import { PokemonDetailsComponent } from "../pokemon-details/pokemon-details.component";
import { PokemonService } from "src/app/shared/services/pokemon.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule } from "@angular/forms";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";

describe("test suite for PokemonList Component", () => {
    beforeEach(async()=>{
        await TestBed.configureTestingModule({
          declarations: [
            PokemonListComponent,
            PokemonItemComponent,
            FilterPokemonPipe,
            HeaderComponent,
            StatsFilterComponent,
            DialogComponent,
            PokemonDetailsComponent,
          ],
          providers: [PokemonService],
          imports: [
            HttpClientTestingModule,
            FormsModule,
            NgMultiSelectDropDownModule,
          ],
        }).compileComponents(); 
    });
  it("", () => {});
});
