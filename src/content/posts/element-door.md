---
title: "Tutorial: Tür mit Schalter"
pubDate: 2025-02-10
description: Eine öffnebare Tür mit Schalter
cover: ../../../public/door/door-complete.png
coverAlt: Die Tür mit Schalter
tags:
  - Godot
  - Tutorial
author: Hauke
index: 7
---

### Hinweis

Dieses Tutorial ist sehr fortgeschritten.  
Du solltest zuerst alle vorherigen Elemente gemacht haben
und auch den Artikel "Schnelles Levelbauen" gelesen haben.

---

Zuerst baust du einen Rahmen wie hier:

![Tür Rahmen](/Godot-Parkour-Guides//door/door-frame.png)

Danach brauchst du wie bei der "Bewegenden Platform" einen `AnimatableBody3D` mit
`MeshInstance3D` und `CollisionShape3D`.

![Tür](/Godot-Parkour-Guides//door/door-door.png)

![Tür Nodes](/Godot-Parkour-Guides//door/door-node.png)

Füge der Tür einen `AnimatableBody3D` hinzu.

![Tür Nodes Animation](/Godot-Parkour-Guides//door/door-node-animation.png)

Animiere das Aufgehen der Tür mit Hilfe der Position des `AnimatableBody3D`.

![Animieren](/Godot-Parkour-Guides//door/animation.png)
![Animieren](/Godot-Parkour-Guides//door/door-aniomation.png)

Da wo der Schalter hin soll habe ich ein kleines Podest gebaut.

![Podest](/Godot-Parkour-Guides//door/door-podest.png)

Erstelle jetzt eine `Area3D` als Unter-Node des Podest und
ziehe es in die Mitte.

![Area3D](/Godot-Parkour-Guides//door/area3d.png)

Erstelle eine `CSGBox3D` als Unter-Node der Area3D, um
den Knopf zu modelieren.

![CSGBox3D](/Godot-Parkour-Guides//door/csgbox.png)

Erstelle diesmal ein eigenes Material im Inspektor der CSGBox3D.

![Erstelle Material](/Godot-Parkour-Guides//door/create-material.png)

Um die Grundfarbe (Albedo) zu ändern suche nach der Eigenschaft Albedo im Material
Inspektor und stell die Farbe Rot ein.

![Ändere Albedo](/Godot-Parkour-Guides//door/change-albedo.png)

Ich mag es dem Knopf noch ein wenig leuchten zu lassen, ändere dafür die
Emission Eigenschaft und stelle wieder Rot ein.

![Ändere Emission](/Godot-Parkour-Guides//door/change-emission.png)

So sollte der Knopf nun aussehen:

![Knopf](/Godot-Parkour-Guides//door/button-result.png)

Um der `Area3D` eine gute CollisionShape3D zu geben, wandel die CSGBox3D
in ein Mesh um.

![Csg to Mesh](/Godot-Parkour-Guides//door/csg-to-mesh.png)

_**Vorsicht:**  
Wenn du ein CSG in ein Mesh verwandelst,
heißt das Node immer noch "CSGBox3D",
weil der Typ unabhängig vom Namen ist
und der Name beibehalten wird.
Lass dich nicht beirren und nenne es
um! Ich hab's jetzt nicht gemacht, weil
diese Nachricht Post-Release eingefügt wurde._

Erstelle jetzt ein leicht größeres Mesh aus dem generierten Mesh,
indem du oben nach **Umriss-Mesh erzeugen** suchst.

![Umriss Mesh](/Godot-Parkour-Guides//door/mesh-extrude.png)
![Umriss Mesh](/Godot-Parkour-Guides//door/mesh-extrude2.png)

Das nun seltsam aussehende neue Mesh wird nicht lange
gebraucht, denn wir generieren daraus nun eine `CollisionShape3D`.
Wähle es dazu im Scene Tree aus und suche nach **Collision-Shape erstellen**.

![Mache CollisionShape3D](/Godot-Parkour-Guides//door/make-cs.png)

Lösche das komische Mesh und ziehe die CollisionShape unter die Area3D.

So sollte das ganze aussehen:

![CollisionShape3D](/Godot-Parkour-Guides//door/btn-res2.png)

Die etwas größere Kollision-Form sorgt dafür, dass der Spieler
nicht so genau zielen muss.

Die `Area3D` kannst du auch umbennen, z.B. in "Knopf".

![Knopf umbenennen](/Godot-Parkour-Guides//door/rename-btn.png)

Gib dem Knopf ein Skript.
Der Code sieht wie folgt aus:

![Button Skript](/Godot-Parkour-Guides//door/btn-code.png)

Mit `signal` können wir eigene Signale erstellen.  
_Signale kommen im JumpPad und Checkpoint Tutorial vor
und werden verwendet um signale an andere Skripte zu senden_

Wenn eine `Area3D` die `interact` Funktion hat, dann
kann der Spieler damit interagieren, indem er `F` drückt.

Sobalt der Spieler also `F` drückt senden wir das Signal.

Gib jetzt deinem Tür-`AnimatableBody3D` ein Skript.

![Tür Nodes](/Godot-Parkour-Guides//door/door-nodes.png)

Das Skript der Tür sollte einfach nur leer sein.

![Tür Code](/Godot-Parkour-Guides//door/door-code.png)

Wähle wieder das Knopf-Node (Area3D) aus dem Scene Tree aus
und gehe auf den Node-Tab neben dem Inspektor-Tab.

Verbinde von dort das `activated`-Signal mit dem Tür-Skript.

![Knopf Signal](/Godot-Parkour-Guides//door/btn-signal.png)

![Signal verbinden](/Godot-Parkour-Guides//door/connect-signal.png)

Jetzt spielen wir im Tür Skript nur die erstellte `open`-Animation ab.

![Tür Code](/Godot-Parkour-Guides//door/door-code2.png)

Damit der Knopf auch ein wenig Feedback gibt,
änder den Knopf-Code noch ein bisschen.

![Knopf Code](/Godot-Parkour-Guides//door/btn-code2.png)

Mit dem `$CSGBox3D` nehmen wir uns die MeshInstance3D als Variable.  
_(Sie heißt noch "CSGBox3D",
weil sie nach der Konvertierung ihren alten Namen behält. Du kannst den natürlich
ändern)_  
Direkt danach besorgen wir uns das active Material mit der `get_active_material` Funktion.  
Die Funktion nimmt noch einen Index. Da das Mesh nur ein Material hat,
und Computer ab 0 anfangen zu zählen, geben wir 0 ein.  
In dem Material ändern wir die Albedo Farbe und die Emission auf Grün.

Fertig ist die Tür mit Schalter.

<video autoplay loop muted src="/Godot-Parkour-Guides/door/door-working.mp4" controls></video>
