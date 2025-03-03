

 street_lamps 
==============



<img src='https://mapcomplete.osm.be/./assets/layers/street_lamps/street_lamp.svg' height="100px"> 

A layer showing street lights






  - This layer is shown at zoomlevel **0** and higher




#### Themes using this layer 





  - [personal](https://mapcomplete.osm.be/personal)
  - [street_lighting](https://mapcomplete.osm.be/street_lighting)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dstreet_lamp' target='_blank'>street_lamp</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22highway%22%3D%22street_lamp%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



**Warning** This quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/ref#values) [ref](https://wiki.openstreetmap.org/wiki/Key:ref) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/support#values) [support](https://wiki.openstreetmap.org/wiki/Key:support) | Multiple choice | [catenary](https://wiki.openstreetmap.org/wiki/Tag:support%3Dcatenary) [ceiling](https://wiki.openstreetmap.org/wiki/Tag:support%3Dceiling) [ground](https://wiki.openstreetmap.org/wiki/Tag:support%3Dground) [pedestal](https://wiki.openstreetmap.org/wiki/Tag:support%3Dpedestal) [pole](https://wiki.openstreetmap.org/wiki/Tag:support%3Dpole) [wall](https://wiki.openstreetmap.org/wiki/Tag:support%3Dwall) [wall_mount](https://wiki.openstreetmap.org/wiki/Tag:support%3Dwall_mount)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/lamp_mount#values) [lamp_mount](https://wiki.openstreetmap.org/wiki/Key:lamp_mount) | Multiple choice | [straight_mast](https://wiki.openstreetmap.org/wiki/Tag:lamp_mount%3Dstraight_mast) [bent_mast](https://wiki.openstreetmap.org/wiki/Tag:lamp_mount%3Dbent_mast)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/light:method#values) [light:method](https://wiki.openstreetmap.org/wiki/Key:light:method) | Multiple choice | [LED](https://wiki.openstreetmap.org/wiki/Tag:light:method%3DLED) [incandescent](https://wiki.openstreetmap.org/wiki/Tag:light:method%3Dincandescent) [halogen](https://wiki.openstreetmap.org/wiki/Tag:light:method%3Dhalogen) [discharge](https://wiki.openstreetmap.org/wiki/Tag:light:method%3Ddischarge) [mercury](https://wiki.openstreetmap.org/wiki/Tag:light:method%3Dmercury) [metal-halide](https://wiki.openstreetmap.org/wiki/Tag:light:method%3Dmetal-halide) [fluorescent](https://wiki.openstreetmap.org/wiki/Tag:light:method%3Dfluorescent) [sodium](https://wiki.openstreetmap.org/wiki/Tag:light:method%3Dsodium) [low_pressure_sodium](https://wiki.openstreetmap.org/wiki/Tag:light:method%3Dlow_pressure_sodium) [high_pressure_sodium](https://wiki.openstreetmap.org/wiki/Tag:light:method%3Dhigh_pressure_sodium) [gas](https://wiki.openstreetmap.org/wiki/Tag:light:method%3Dgas)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/light:colour#values) [light:colour](https://wiki.openstreetmap.org/wiki/Key:light:colour) | [color](../SpecialInputElements.md#color) | [white](https://wiki.openstreetmap.org/wiki/Tag:light:colour%3Dwhite) [green](https://wiki.openstreetmap.org/wiki/Tag:light:colour%3Dgreen) [orange](https://wiki.openstreetmap.org/wiki/Tag:light:colour%3Dorange)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/light:count#values) [light:count](https://wiki.openstreetmap.org/wiki/Key:light:count) | [pnat](../SpecialInputElements.md#pnat) | [1](https://wiki.openstreetmap.org/wiki/Tag:light:count%3D1) [2](https://wiki.openstreetmap.org/wiki/Tag:light:count%3D2)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/light:lit#values) [light:lit](https://wiki.openstreetmap.org/wiki/Key:light:lit) | Multiple choice | [dusk-dawn](https://wiki.openstreetmap.org/wiki/Tag:light:lit%3Ddusk-dawn) [24/7](https://wiki.openstreetmap.org/wiki/Tag:light:lit%3D24/7) [motion](https://wiki.openstreetmap.org/wiki/Tag:light:lit%3Dmotion) [demand](https://wiki.openstreetmap.org/wiki/Tag:light:lit%3Ddemand)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/light:direction#values) [light:direction](https://wiki.openstreetmap.org/wiki/Key:light:direction) | [direction](../SpecialInputElements.md#direction) | 




### ref 



The question is **What is the reference number of this street lamp?**

This rendering asks information about the property  [ref](https://wiki.openstreetmap.org/wiki/Key:ref) 
This is rendered with `This street lamp has the reference number {ref}`



### support 



The question is **How is this street lamp mounted?**





  - **This lamp is suspended using cables** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:support' target='_blank'>support</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:support%3Dcatenary' target='_blank'>catenary</a>
  - **This lamp is mounted on a ceiling** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:support' target='_blank'>support</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:support%3Dceiling' target='_blank'>ceiling</a>
  - **This lamp is mounted in the ground** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:support' target='_blank'>support</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:support%3Dground' target='_blank'>ground</a>
  - **This lamp is mounted on a short pole (mostly < 1.5m)** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:support' target='_blank'>support</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:support%3Dpedestal' target='_blank'>pedestal</a>
  - **This lamp is mounted on a pole** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:support' target='_blank'>support</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:support%3Dpole' target='_blank'>pole</a>
  - **This lamp is mounted directly to the wall** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:support' target='_blank'>support</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:support%3Dwall' target='_blank'>wall</a>
  - **This lamp is mounted to the wall using a metal bar** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:support' target='_blank'>support</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:support%3Dwall_mount' target='_blank'>wall_mount</a>




### lamp_mount 



The question is **How is this lamp mounted to the pole?**





  - **This lamp sits atop of a straight mast** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:lamp_mount' target='_blank'>lamp_mount</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:lamp_mount%3Dstraight_mast' target='_blank'>straight_mast</a>
  - **This lamp sits at the end of a bent mast** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:lamp_mount' target='_blank'>lamp_mount</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:lamp_mount%3Dbent_mast' target='_blank'>bent_mast</a>


Only visible if `support=pole` is shown



### method 



The question is **What kind of lighting does this lamp use?**





  - **This lamp is lit electrically** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:light:method' target='_blank'>light:method</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:light:method%3Delectric' target='_blank'>electric</a>_This option cannot be chosen as answer_
  - **This lamp uses LEDs** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:light:method' target='_blank'>light:method</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:light:method%3DLED' target='_blank'>LED</a>
  - **This lamp uses incandescent lighting** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:light:method' target='_blank'>light:method</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:light:method%3Dincandescent' target='_blank'>incandescent</a>
  - **This lamp uses halogen lighting** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:light:method' target='_blank'>light:method</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:light:method%3Dhalogen' target='_blank'>halogen</a>
  - **This lamp uses discharge lamps (unknown type)** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:light:method' target='_blank'>light:method</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:light:method%3Ddischarge' target='_blank'>discharge</a>
  - **This lamp uses a mercury-vapour lamp (lightly blueish)** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:light:method' target='_blank'>light:method</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:light:method%3Dmercury' target='_blank'>mercury</a>
  - **This lamp uses metal-halide lamps (bright white)** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:light:method' target='_blank'>light:method</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:light:method%3Dmetal-halide' target='_blank'>metal-halide</a>
  - **This lamp uses fluorescent lighting** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:light:method' target='_blank'>light:method</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:light:method%3Dfluorescent' target='_blank'>fluorescent</a>
  - **This lamp uses sodium lamps (unknown type)** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:light:method' target='_blank'>light:method</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:light:method%3Dsodium' target='_blank'>sodium</a>
  - **This lamp uses low pressure sodium lamps (monochrome orange)** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:light:method' target='_blank'>light:method</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:light:method%3Dlow_pressure_sodium' target='_blank'>low_pressure_sodium</a>
  - **This lamp uses high pressure sodium lamps (orange with white)** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:light:method' target='_blank'>light:method</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:light:method%3Dhigh_pressure_sodium' target='_blank'>high_pressure_sodium</a>
  - **This lamp is lit using gas** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:light:method' target='_blank'>light:method</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:light:method%3Dgas' target='_blank'>gas</a>




### colour 



The question is **What colour light does this lamp emit?**

This rendering asks information about the property  [light:colour](https://wiki.openstreetmap.org/wiki/Key:light:colour) 
This is rendered with `This lamp emits {light:colour} light`



  - **This lamp emits white light** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:light:colour' target='_blank'>light:colour</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:light:colour%3Dwhite' target='_blank'>white</a>
  - **This lamp emits green light** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:light:colour' target='_blank'>light:colour</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:light:colour%3Dgreen' target='_blank'>green</a>
  - **This lamp emits orange light** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:light:colour' target='_blank'>light:colour</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:light:colour%3Dorange' target='_blank'>orange</a>




### count 



The question is **How many fixtures does this light have?**

This rendering asks information about the property  [light:count](https://wiki.openstreetmap.org/wiki/Key:light:count) 
This is rendered with `This lamp has {light:count} fixtures`



  - **This lamp has 1 fixture** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:light:count' target='_blank'>light:count</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:light:count%3D1' target='_blank'>1</a>
  - **This lamp has 2 fixtures** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:light:count' target='_blank'>light:count</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:light:count%3D2' target='_blank'>2</a>


Only visible if `support=pole` is shown



### lit 



The question is **When is this lamp lit?**





  - **This lamp is lit at night** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:light:lit' target='_blank'>light:lit</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:light:lit%3Ddusk-dawn' target='_blank'>dusk-dawn</a>
  - **This lamp is lit 24/7** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:light:lit' target='_blank'>light:lit</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:light:lit%3D24/7' target='_blank'>24/7</a>
  - **This lamp is lit based on motion** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:light:lit' target='_blank'>light:lit</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:light:lit%3Dmotion' target='_blank'>motion</a>
  - **This lamp is lit based on demand (e.g. with a pushbutton)** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:light:lit' target='_blank'>light:lit</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:light:lit%3Ddemand' target='_blank'>demand</a>




### direction 



The question is **Where does this lamp point to?**

This rendering asks information about the property  [light:direction](https://wiki.openstreetmap.org/wiki/Key:light:direction) 
This is rendered with `This lamp points towards {light:direction}`

Only visible if `light:count=1` is shown 

This document is autogenerated from [assets/layers/street_lamps/street_lamps.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/street_lamps/street_lamps.json)