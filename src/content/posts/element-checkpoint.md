---
title: "Tutorial: Unsichtbarer Checkpoint"
pubDate: 2025-02-09
description: unsichtbarer Checkpoint
cover: ../../../public/checkpoint/checkpoint-image.png
coverAlt: Der Checkpoint
tags:
  - Godot
  - Tutorial
author: Hauke
---

### Hinweis

Es wäre von Vorteil, wenn du mit dem JumpPad Tutorial
anfängst, bevor du mit diesem Tutorial startest.

Hier wird nicht mehr so viel erklährt.

---

Stell dir vor dein Parkour sieht so aus:

![Parkour](/Godot-Parkour-Guides/checkpoint/parkour.png)

Was ist nun, wenn der Spieler die bewegliche Platform
überwindet, aber beim nächsten Element stirbt?

Er spawnt wieder ganz am Anfang.
Das kann eine bewusstes Design-Idee sein, ist aber doof
für den Spieler.

Deshalb bauen viele Spiele einen Checkpoint bei so einer Stelle ein.

Dieser Checkpoint soll unsichtbar sein und den Spieler einfach bei Tod
wieder bei der mittleren Platform spawnen.

Starte mit dem erstellen einer **Area3D** als Unter-Node der mittleren Platform.
Nenne sie "Checkpoint".
Erstelle auch gleich eine **CollisionShape3D** als Unter-Node der Area3D.

![CollisionShape3D](/Godot-Parkour-Guides/checkpoint/cs-node.png)

Wenn du die CollisionShape3D im Scene Tree auswählst, dann
siehst du orange-weiße Punkte an der CollisionShape im Editor.  
Du kannst diese zur Einstellung der Größe nutzen.

Ändere die Größe auf die der mittleren Platform.

![CollisionShape3D Größe](/Godot-Parkour-Guides/checkpoint/cs-resize.png)

Um zu Kontrollieren, an welcher Stelle auf der Platform der Spieler
respawnt, füge dem Checkpoint ein sogenanntes `Marker3D` Node hinzu.  
_(Ein Marker3D ist eigentlich nur ein Node3D, aber man benutzt
es generell um Positionen zu markieren)_

![Marker3D](/Godot-Parkour-Guides/checkpoint/marker-node.png)

Ändere die Position des Markers nach belieben.
Ich lasse den Marker in der Mitte und ziehe ihn nur etwas hoch.

![Marker Position](/Godot-Parkour-Guides/checkpoint/marker.png)

Gebe dem Checkpoint nun ein eingebettetes Skript und
verbinde, wie beim JumpPad das `body_entered` Signal mit
dem Checkpoint.

![Signal](/Godot-Parkour-Guides/checkpoint/signal.png)

Ändere den Code nun wie folgt:

![Code](/Godot-Parkour-Guides/checkpoint/code.png)

Der Code unterscheidet sich zum Code des JumpPads nur gering.
Doch statt nach der `jump` Funktion zu suchen und diese
auszuführen, suchen wir nach `set_checkpoint`.

Diese Funktion will eine Position haben, also
geben wir ihr die `global_position` des Markers an.

_Mit dem `$` kann man Unter-Nodes im Code auswählen_

Vergiss nicht die Collision-Mask an den Spieler anzupassen!

![Collision Mask](/Godot-Parkour-Guides/checkpoint/collision-mask.png)

Nun _sollte_ alles funktionieren.
