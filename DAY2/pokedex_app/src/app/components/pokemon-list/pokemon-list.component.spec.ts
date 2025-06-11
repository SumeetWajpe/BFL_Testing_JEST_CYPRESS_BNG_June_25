import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PokemonListComponent } from "./pokemon-list.component";
import { PokemonItemComponent } from "../pokemon-item/pokemon-item.component";
import { FilterPokemonPipe } from "../../shared/pipes/filter-pokemon.pipe";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { StatsFilterComponent } from "../../shared/components/stats-filter/stats-filter.component";
import { DialogComponent } from "../../shared/components/dialog/dialog.component";
import { PokemonDetailsComponent } from "../pokemon-details/pokemon-details.component";
import { PokemonService } from "../../shared/services/pokemon.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { FormsModule } from "@angular/forms";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";

describe("test suite for PokemonList Component", () => {
  let compInstance: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let httpMock: HttpTestingController;
  beforeEach(async () => {
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
    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(PokemonListComponent);
    compInstance = fixture.componentInstance;
  });
  it("tess if DI framework creates the service instance & its dependencies", () => {
    let servInstance = fixture.debugElement.injector.get(PokemonService);
    expect(servInstance).toBeTruthy();
  });
});
