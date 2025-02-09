---
title: "Tutorial: JumpPad"
pubDate: 2025-02-09
description: Eine JumpPad
cover: ../../../public/jumppad/jumppad-image.png
coverAlt: Das JumpPad
tags:
  - Godot
  - Tutorial
author: Hauke
---

<video style="pointer-events: none;" autoplay loop muted src="/Godot-Parkour-Guides/jumppad/jumpad-working.mp4" controls></video>

In diesem Tutorial erstelle ich ein JumpPad.
_(Ein JumpPad ist eine kleine Platform, die dich in die Höhe
katapultiert)_

Zuerst brauch man ein Node, welches herausfinden kann, ob der Spieler
es gerade berührt. Hierfür gibt es die sogennante **Area3D**.

Füg diese dem Level hinzu.

![Erstelle Area3D](/Godot-Parkour-Guides//jumppad/create-area3d.png)

Benenne sie am besten noch um, damit man leichter erkennt,
was es sein soll.

![Namen der Area3D](/Godot-Parkour-Guides//jumppad/rename-node.png)

Wie auch alle anderen Objekte, die irgendwas mit Physik und
Collision zu tun haben, braucht Area3D eine **CollisionShape3D**.

Also erstelle eine CollisionShape3D als Unter-Node von unserem JumpPad.

![Erstelle CollisionShape3D](/Godot-Parkour-Guides//jumppad/create-cs.png)

Wähle die CollisionShape3D im Scene Tree aus und
schaue in den Inspektor.

Hier muss noch eine Form ausgewählt werden.

![Wähle Form](/Godot-Parkour-Guides//jumppad/cs-type.png)

Ändere die Dimensionen der Box nach belieben.

![Ändere Dimensionen](/Godot-Parkour-Guides//jumppad/cs-dims.png)

Damit man die Platform auch sieht, erstelle eine **MeshInstance3D** als Unter-Node
des JumpPad.

![Erstelle MeshInstance3D](/Godot-Parkour-Guides//jumppad/create-mesh.png)

Wähle es wieder im Scene Tree aus und schaue in den Inspektor.

Ändere nun den Mesh Typ.

![Mesh Typ](/Godot-Parkour-Guides//jumppad/mesh-type.png)

Stelle die Dimensionen des Meshes auf die der CollisionShape3D ein.

![Ändere Dimensionen](/Godot-Parkour-Guides//jumppad/mesh-dims.png)

Damit's nicht so langweilig aussieht, fügst du ein Material aus
dem Material-Ordner hinzu.

![Mesh Material](/Godot-Parkour-Guides//jumppad/mesh-material.png)

Wähle im Scene Tree das JumpPad aus und bewege es dahin wo du es haben möchtest.
Ich lasse ein wenig vom JumpPad oben aus dem Boden rausgucken, damit
der Spieler damit interagieren kann.

![Bewege JumpPad](/Godot-Parkour-Guides//jumppad/move-jumppad.png)

Gebe dem JumpPad nun ein Skript.
Da das Skript weider nur klein wird,
kümmern wir uns nicht um den Speicherort und
betten es im Node ein.

![Skript Parameters](/Godot-Parkour-Guides//jumppad/code-creation.png)

Der Code sollte für's Erste leer sein.

![Leerer Code](/Godot-Parkour-Guides//jumppad/code-clear.png)

Wähle nun JumpPad im Scene Tree aus (wichtig!)
und öffne den **Node-Tab** neben dem Inspektor.

![Signal Tab](/Godot-Parkour-Guides//jumppad/signal-tab.png)

Dort gibt es viele unterschiedliche Signale, die
die Area3D uns geben kann. In unserem Fall brauchen wir
das `body_entered` Signal, Doppelklick darauf.

![Signal auswählen](/Godot-Parkour-Guides//jumppad/select-signal.png)

Wähle in der Liste von Nodes unser JumpPad aus und drücke auf Verbinden.

![JumpPad auswählen](/Godot-Parkour-Guides//jumppad/select-jumppad-script.png)

Im Code taucht nun diese Funktion auf:

![Code mit Signal](/Godot-Parkour-Guides//jumppad/code-with-signal.png)

Ändere den Code nun wie folgt:

![fertiger Code](/Godot-Parkour-Guides//jumppad/code-finished.png)

Was dieser Code macht:

- schnappt sich das Eltern-Node des Bodies
  (das Spieler-Node ist so aufgebaut, dass das eigentliche Spieler-Node
  das Eltern-Node des Bodies ist)
- wenn es das Eltern-Node gibt und es eine `jump` Funktion hat,
  dann führe diese aus mit dem Wert 10

Du kannst den Wert auch anpassen, je nach dem wie hoch der Sprung
sein soll.

Wenn du das Spiel jetzt startest, funktioniert es aber noch nicht.
Das liegt daran, dass die Area3D gar eingestellt wurde.

Um das zu tun, suche im Inspektor die Collision-Gruppe.

![Collision's Eigenschaften](/Godot-Parkour-Guides//jumppad/collision-props.png)

Collision Layer's sind dafür da, Collisionen zwischen
Objekten zu verhindern oder eben zu ermöglichen.
_(Eine bessere Erklärung findet sich, wenn man über Layer oder Mask
mit der Maus hovert)_

Das Einzige was man jetzt wissen muss, ist, dass der
Spieler das Collision Layer 2 hat.

Um unsere Area3D darauf reagieren zu lassen, wähle in Mask
nur die 2.

![Collision Mask](/Godot-Parkour-Guides//jumppad/collision-mask.png)

Wenn du nun startest, sollte das JumpPad funktionieren.

---

### Hinweis 1

Wenn du mehr JumpPads benutzen willst,
dann mache aus dem JumpPad eine Scene und
speichere sie.

![Szene speichern auswählen](/Godot-Parkour-Guides//jumppad/select-save-scene.png)

![Szene speichern](/Godot-Parkour-Guides//jumppad/save-scene.png)

Nun kannst du sie entweder aus dem Datei-Manager immer weider in
das Level ziehen oder das vorhandenen Node auswählen
und **Strg+D** drücken.

![Zwei JumpPads](/Godot-Parkour-Guides//jumppad/two-jumppads.png)

---

### Hinweis 2

Da das JumpPad nun seine eigene Szene ist,
teilen sich alle JumpPads das gleiche Skript.

Das ist doof, weil du dann die Sprunghöhe nicht
individuell einstellen kannst.

Um das Problem zu beheben, öffne wieder das Skript
und ändere den Code wie folgt:

![Code ändern](/Godot-Parkour-Guides//jumppad/change-code.png)

`@export` sorgt dafür, dass diese Variable im Inspektor
sichtbar wird.

Gehe wieder zum Level und wähle das JumpPad im Scene Tree aus.

Du kannst nun die Sprunghöhe individuell einstellen.

![Sprunghöhe einstellen](/Godot-Parkour-Guides//jumppad/change-jumpheight.png)
