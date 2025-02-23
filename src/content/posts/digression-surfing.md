---
title: "Exkurs: Surfing"
pubDate: 2025-02-23
description: Was ist „Surfing“?
cover: ../../../public/surfing/surf.png
coverAlt: Surfing
tags:
  - Godot
  - Exkurs
author: Hauke
index: 6.6
---

### Was ist Surfing?

"Surfen" ist kann man sich als **Bug** im Code
des Spielers vorstellen.  
Es erlaubt einem, mit etwas Können, eine schräge
Wand entlang zu gleiten.

Ich verwende es als kleines Hindernis im Tür-Tutorial.

<video autoplay loop muted src="/Godot-Parkour-Guides/surfing/surfing.mp4" controls></video>

---

Um zu "surfen" brauch wir eine schräge Wand.  
Zum Glück haben wir das **ProtoRamp**-Plugin installiert.

Also erstelle eine ProtoRamp:

![ProtoRamp](/Godot-Parkour-Guides//surfing/proto-ramp.png)

Wie man erkennen kann, gehört sie zum Typ
**CSG**. Sie verhält sich also wie eine `CSGShape`.  
Also verändere sie wie eine `CSGBox3D` oder andere CSGShapes.

![ProtoRamp](/Godot-Parkour-Guides//surfing/proto-ramp2.png)

Wie lange die Rampe ist spielt am Ende keine Rolle.  
**Nur der Winkel muss stimmen!**

_So ungefähr sollte der Winkel sein:_
![Rampen Winkel](/Godot-Parkour-Guides//surfing/ramp-angle.png)

Ich stelle noch ein Material ein ...

![Material](/Godot-Parkour-Guides//surfing/material.png)

... und
setze **Collision** auf an.

![Collision](/Godot-Parkour-Guides//surfing/enable-collision.png)

Der Rest hängt nur vom "Surfen" selbst ab.

Eigentlich ist es ganz einfach:

- Springe auf die Rampe (mit Schwung)
- Lasse im Sprung **W** los
- Halte die Taste gedrückt, in welcher Richtung die Rampe ist.  
  _**A** für **links** und **D** für **rechts**_
- Halte deine Blickrichtung möglichst gerade, vielleicht
  ein wenig herabschauend

Wer's immer noch nicht schafft, sollte ein auf [Youtube ein
paar Tutorials](https://www.youtube.com/results?search_query=counter+strike+how+to+surf) dazu finden könne.
