import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TileComponent } from './components/codex-elements/tile/tile.component';
import { TabletComponent } from './components/codex-elements/tablet/tablet.component';
import { TranslatorComponent } from './components/codex-elements/translator/translator.component';
import { AnticKeyboardComponent } from './components/codex-elements/antic-keyboard/antic-keyboard.component';
import { CodexComponent } from './components/codex-elements/codex/codex.component';
import { LetterComponent } from './components/typo/letter/letter.component';
import { KeyboardComponent } from './components/codex-elements/keyboard/keyboard.component';
import { ScreenComponent } from './components/codex-elements/screen/screen.component';
import { WordComponent } from './components/typo/word/word.component';
import { WallTabsComponent } from './components/deco/wall-tabs/wall-tabs.component';
import { SpaceTimeRiftComponent } from './components/deco/space-time-rift/space-time-rift.component';
import { ConsoleSwapperComponent } from './components/spells-elements/console-swapper/console-swapper.component';
import { MessageNoteComponent } from './components/deco/message-note/message-note.component';
import { HypercubeComponent } from './components/deco/hypercube/hypercube.component';
import { ScreenGlyphComponent } from './components/codex-elements/screen-glyph/screen-glyph.component';
import { CarouselVerticalComponent } from './components/spells-elements/carousel-vertical/carousel-vertical.component';
import { SpellMappingSelectorComponent } from './components/spells-elements/spell-mapping-selector/spell-mapping-selector.component';
import { ControllerButtonMappingComponent } from './components/spells-elements/controller-button-mapping/controller-button-mapping.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    TabletComponent,
    TranslatorComponent,
    AnticKeyboardComponent,
    CodexComponent,
    LetterComponent,
    KeyboardComponent,
    ScreenComponent,
    WordComponent,
    WallTabsComponent,
    SpaceTimeRiftComponent,
    ConsoleSwapperComponent,
    MessageNoteComponent,
    HypercubeComponent,
    ScreenGlyphComponent,
    CarouselVerticalComponent,
    SpellMappingSelectorComponent,
    ControllerButtonMappingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
