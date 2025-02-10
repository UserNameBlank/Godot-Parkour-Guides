---
title: "Tutorial: Bewegende Platform"
pubDate: 2025-02-07
description: Eine einfache sich bewegende Platform
cover: ../../../public/moving-platform/platform-image.png
coverAlt: Der Godot Editor
tags:
  - Godot
  - Tutorial
author: Hauke
---

Dieses Tutorial zeigt wie man eine sich bewegende Platform in Godot erstellt.

<video  autoplay loop muted src="/Godot-Parkour-Guides/moving-platform.webm" controls></video>

---

### Die Platform

Zuerst musst du ein neues Node erstellen.
Hierfür wählst du im Scene Tree das Level Node aus
und drückst das Plus.

![Der Create Node Button](/Godot-Parkour-Guides//moving-platform/create-node-button.png)

Dann erstellst du ein einfaches Node3D Node.

![Node3D Node](/Godot-Parkour-Guides//moving-platform/create-node3d.png)

danach änderst du den Name des Nodes auf etwas passendes, wie "Platform",
indem du darauf Doppelt klickst.

![Namen ändern](/Godot-Parkour-Guides//moving-platform/rename-node.png)

Damit wir die Platform auch sehen können, brauchen wir ein sogenanntes **Mesh**.
Erstelle es als Kind der Platform, indem du das Platform-Node auswählst und
wieder auf den Plus-Button drückst.

Wähle nun **MeshInstance3D** aus.

![Wähl Mesh](/Godot-Parkour-Guides//moving-platform/create-mesh.png)

Wie du siehst, siehst du nichts.
Also ändere den Typ des Mesh im Inspektor.

![Mesh Typ](/Godot-Parkour-Guides//moving-platform/select-mesh.png)

Damit das kein armseliger Würfel bleibt, ändere die Dimensionen des Meshes.

![Mesh Dimensionen](/Godot-Parkour-Guides//moving-platform/mesh-edit.png)

Noch sieht es nicht schön aus also fügst du bei dem Material Parameter
des Mesh ein Material aus dem Material-Ordner hinzu.

![Ändere Material](/Godot-Parkour-Guides//moving-platform/mesh-set-material.png)

Wenn du das Spiel jetzt startest, fällt der Spieler durch die Platform durch.
Das liegt daran, dass wir noch nicht festgelegt haben, wie die Platform mit
dem Spieler interagiert.

Um das zu machen, ändere den Node-Typ des Platform-Nodes auf **StaticBody3D**.

![Ändere Node-Typ](/Godot-Parkour-Guides//moving-platform/change-platform-type.png)

![StaticBody3D auswählen](/Godot-Parkour-Guides//moving-platform/select-staticbody.png)

Nun sagt Godot uns freundlicherweise, dass etwas mit unserem
StaticBody3D nicht stimmt.

![Etwas stimmt nicht](/Godot-Parkour-Guides//moving-platform/staticbody-error.png)

Das liegt daran, dass alle `PhysicBodies`, die es in Godot gibt,
eine oder mehrere **Kollisions-Körper brauchen**, damit
Godot's **Physik-Engine** weiß, welche **Form** unser `PhysikBody` hat.

Also wähle wieder das Platform-Node aus und klicke auf den Plus-Button.
Nun such nach **CollisionShape3D**.

![Wähle CollisionShape3D](/Godot-Parkour-Guides//moving-platform/select-collisionshape.png)

Die CollisionShape3D gibt uns nun auch eine Warnung,
weil wir im Inspektor keine Form definiert haben.

Also wähle im Inspektor unter `Shape` die Box-Form aus.

![Definiere Form](/Godot-Parkour-Guides//moving-platform/cs-select-shape.png)

Hier musst du die **Dimensionen** der Box, wie beim Mesh auch, festlegen.

![Lege Dimensionen fest](/Godot-Parkour-Guides//moving-platform/cs-edit-shape.png)

So sieht das ganze dann im Editor aus:

![im editor](/Godot-Parkour-Guides//moving-platform/show-mesh-n-cs.png)

_Die `CollisionShape3D` ist im Mesh ein wenig untergegangen,
um zu überprüfen ob die Dimensionen stimmen, kann man das Mesh
unsichtbar machen, indem man auf das AugenSymbol daneben klickt._

---

### Die Animation

Bewegen tut sich die Platform aber noch nicht :(

Man könnte das ganze jetzt mit Code lösen, aber Godot gibt uns
einen (meiner Meinung nach) einfacheren Weg.

Hierzu erstelle ein weiteres Node unter dem Platform-Node,
und zwar ein `AnimationPlayer`.

![AnimationPlayer](/Godot-Parkour-Guides//moving-platform/add-animationplayer.png)

Unten im Editor sollte nun ein weitere Tab aufgegangen sein.
Mit diesem können wir unsere Animation verwalten und definieren.

Erstelle in diesem Tab nun eine Animation indem du bei Animation auf **Neu** klickst.
Du kannst sie beliebig benennen, ich nenne sie im Tutorial einfach "`move`".

![Erstelle Animation](/Godot-Parkour-Guides//moving-platform/create-animation.png)

Ändere die Länge der Animation nach belieben.
Bedenke hierbei, dass eine größere Länge eine langsamere Platform
bedeutet.
Auch musst du die Länge der Animation anpassen, wenn die Platform
eine sehr weite Strecke hinter sich legen soll.

![Ändere die Länge](/Godot-Parkour-Guides//moving-platform/animation-duration.png)

Während der Animations-Tab im Editor offen ist, zeigt sich hinter
jeder `Property` im Inspektor ein Schlüssel-Symbol.
Ein **Schlüssel-Symbol** bedeutet, dass der Wert **"Animiert"** werden kann.

Wir wollen unsere Platform bewegen, also müssen wir die Position
der Platform "animieren".

Hierfür wählst du im Scene Tree das Platform-Node aus und suchst
im Inspektor (unter Transform) die **Position**.
Dann drücke auf den Schlüssel.

![Zeige Schlüssel](/Godot-Parkour-Guides//moving-platform/show-the-keys.png)

Drücke auf OK.
Das sorgt dafür, dass ein neuer Track und ein kleiner Punkt
im Animation-Tab aufgetaucht ist. Der Punkt steht für den Wert,
den der "animierte" Wert (in diesem Fall **Position**)
zu der ausgewählten Zeit annehmen wird.

Nun klicke im Zeitstrahl der Animation oben in die Mitte,
um den blauen Strich dahin zu bringen.

![Animation Mitte](/Godot-Parkour-Guides//moving-platform/anim-move-to-middle.png)

Ändere jetzt die Position der Platform auf die Stelle, zu der die Platform
sich bewegen soll und drücke wieder auf den Schlüssel.

![Neuer Punkt](/Godot-Parkour-Guides//moving-platform/anim-create-middle.png)

Godot wird bei einer Animation den Wert zwischen den Punkten
animieren und so die Platfrom gleichmäßig bewegen.

Damit die Platform auch wieder zurück geht, drücke auf den
ersten weißen Punkt und drücke **Strg+C** um ihn zu kopieren.

Bewege den blauen Strich ans Ende des Zeitstrahls und drücke
**Strg+V** um den Anfangspunkt erneut einzufügen.

![Ender Punkt](/Godot-Parkour-Guides//moving-platform/anim-create-end.png)

Damit die Platform sich in einer Endlos-Schleife bewegt,
drücke auf das Schleifen-Symbol.

![Schleife](/Godot-Parkour-Guides//moving-platform/animation-repeat.png)

Schau dir nun deine Animation an, indem du Play drückst.

![Spiel](/Godot-Parkour-Guides//moving-platform/anim-press-play.png)

KRASS!!!! Die Platform bewegt sich!

_Aber_ wenn du das Spiel startest bewegt sich gar nichts.
Du musst die Animation starten und das geht (wie ich getestet habe)
nur mit ein wenig Code.

_Zu meiner Aussage vorher: Hab gelogen, müssen doch Code schreiben_

Gebe der Platform ein Skript, indem du das Platform-Node auswählst
und oben auf das **Skript-Hinzufügen-Symbol** klickst.

![Skript](/Godot-Parkour-Guides//moving-platform/staticbody-add-script.png)

Da die Datei nur ganz wenig Code enthalten wird,
kümmern wir uns nicht um den Speicherort und
fügen das Skript in das Node ein.

![Skript Parameters](/Godot-Parkour-Guides//moving-platform/script-creation.png)

Füge im Code-Editor nun diesen Code ein:

![GdScript](/Godot-Parkour-Guides//moving-platform/the-script.png)

Das einzige was passiert ist, dass
wir in der `_ready` function beim Start
die Animation "move" (oder wie du sie genannt hast) ausführen.

_Mit dem `$` können wir Kinder-Nodes unseres Node direkt
im Code auswählen_

Wenn du nun das Spiel startest, bewegt sich die Platform.

---

### Wichtig

Du hast vielleicht bemerkt, dass sich der
Spieler auf der Platform nicht bewegt.

Das liegt daran, dass unsere Platform ein **StaticBody3D** ist
_(Es hat "Static" im Namen, es ist nicht dafür gemacht sich zu bewegen)_.

Tja, StaticBody3D's lassen sich nicht gerne bewegen.

Aber es gibt ja noch andere `PhysikBodies`.

Also wähle Platform im Scene Tree aus und
ändere wieder Platform's Node-Typ.

Wir wollen diesmal ein **AnimatableBody3D** haben.  
_Get it? Es hat "Animatable" im Namen._

![AnimatableBody3D](/Godot-Parkour-Guides//moving-platform/change-type-again.png)

Das war's. Alles sollte nun funktionieren.

<video src="/Godot-Parkour-Guides/moving-platform/platform-moving.mp4" autoplay loop muted controls></video>
