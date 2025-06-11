import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { LoaderService } from "./shared/services/loader.service";
import { RouterTestingModule } from "@angular/router/testing";

describe("test suite for AppComponent", () => {
  it("should create App Component instance", async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule],
      providers: [LoaderService],
    }).compileComponents();
    // create an instance of the AppComponent
    const fixture = TestBed.createComponent(AppComponent);
    const appInstance = fixture.componentInstance; // <app-component>
    expect(appInstance).toBeTruthy();
  });
});
