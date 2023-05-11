[Mermaid](https://mermaid-js.github.io/mermaid/#/flowchart?id=graph)

```mermaid
flowchart TD
classDef onPushClass fill:#095,stroke:#333,stroke-width:4px;
AppComponent-3[AppComponent]-->NavbarComponent-4[NavbarComponent]
 NavbarComponent-4[NavbarComponent]-->NavElementsComponent-5[NavElementsComponent]
 NavbarComponent-4[NavbarComponent]-->MobileMenuComponent-6[MobileMenuComponent]
  MobileMenuComponent-6[MobileMenuComponent]-->OverlayComponent-7[OverlayComponent]
   OverlayComponent-7[OverlayComponent]-->MobileNavElementsComponent-8[MobileNavElementsComponent]

```
