---
title: "Exkurs: RigidBody3D"
pubDate: 2025-02-24
description: RigidBody
cover: ../../../public/rigidbody/rigidbody.png
coverAlt: RigidBody
tags:
  - Godot
  - Exkurs
author: Hauke
index: 8
---

### RigidBodies

Ein **RigidBody** ist ein PhysikBody, wie ein `StaticBody` auch.
Nur dieser verhält sich wie ein echtes Objekt mit Gravitation und
Interaktion.

<video autoplay loop muted src="/Godot-Parkour-Guides/rigidbody/rigidbody.mp4" controls></video>

---

Zuerst einmal einen **RigidBody3D** erstellen:

![RigidBody3D](/Godot-Parkour-Guides/rigidbody/node.png)

Ich benutze jetzt ein Objekt aus einem Asset-Packet von [kenney.nl](https://kenney.nl/assets/category:3D).  
Was für ein Mesh ihr benutzt ist ja eigentlich auch egal.

Hier ist es jetzt halt ein Fass:

![Fass](/Godot-Parkour-Guides/rigidbody/barrel.png)
![Fass](/Godot-Parkour-Guides/rigidbody/barrel-mesh.png)

Bisher gab es ja den Trick einfach eine `CollisionShape3D` aus dem Mesh
generieren zu lassen. Tja... RigidBodies mögen das gar nicht.  
Also muss man selber Hand an legen und eine eigene `CollisionShape` erstellen.

![CollisionShape3D](/Godot-Parkour-Guides/rigidbody/collisionshape.png)

Wähle einfach die Form aus die am besten passt.  
In diesem Fall passt ein Zylinder sehr gut
zu einem Fass.

![Form](/Godot-Parkour-Guides/rigidbody/shape.png)

Pass sie noch ein wenig an ...

![Fertige Form](/Godot-Parkour-Guides/rigidbody/finished-shape.png)

... perfekt!

---

### Hinweis

Wenn du jetzt versuchst das Fass (oder was auch immer) zu bewegen, tut sich
fast gar nichts.  
Das liegt daran, dass der Spieler denkt, dass das Fass eine Wand wäre und deshalb
davor stehen bleibt.

Um das zu ändern müssen wir die `CollisionMask` ein wenig anpassen.

![mask](/Godot-Parkour-Guides/rigidbody/mask.png)

**Layer** stehen für die Layer, von denen das Fass Teil ist.
**3** steht in diesem Projekt für kleinere Objekte.

Des Spieler's Layer ist **2** und die Wände und Platformen
sind **1**.

Der Spieler ist so eingestellt, dass er nur Dinge aus Layer **1**
für Wände und Platformen hält. D. h., dass er jetzt das Fass
ignorieren sollte.

Des Fasses Mask _checkt_ Layer **1** und **2** ab.
Heißt das Fass interagiert mit Spieler und Wände & Platformen.  
_(Aber nicht mit anderen kleineren Objekten!  
Man könnte jetzt auch **3** einstellen, damit es auch mit
anderen kleinen Objekten interagiert.)_

---

### Idee

Man könnte `RigidBodies` nutzen um eine Tür dann öffen zu lassen, wenn
der Spieler eine Box oder so auf eine Platform schiebt.
