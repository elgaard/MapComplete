

 drinking_water 
================



<img src='https://mapcomplete.osm.be/pin:#6BC4F7;./assets/layers/drinking_water/drips.svg' height="100px"> 

A layer showing drinking water fountains






  - This layer is shown at zoomlevel **13** and higher
  - This layer will automatically load  [drinking_water](./drinking_water.md)  into the layout as it depends on it:  A calculated tag loads features from this layer (calculatedTag[0] which calculates the value for _closest_other_drinking_water)
  - This layer is needed as dependency for layer [drinking_water](#drinking_water)




#### Themes using this layer 





  - [cyclofix](https://mapcomplete.osm.be/cyclofix)
  - [drinking_water](https://mapcomplete.osm.be/drinking_water)
  - [nature](https://mapcomplete.osm.be/nature)
  - [personal](https://mapcomplete.osm.be/personal)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Ddrinking_water' target='_blank'>drinking_water</a>
  - access!~^permissive$
  - access!~^private$


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22amenity%22%3D%22drinking_water%22%5D%5B%22access%22!~%22%5Epermissive%24%22%5D%5B%22access%22!~%22%5Eprivate%24%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



**Warning** This quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/operational_status#values) [operational_status](https://wiki.openstreetmap.org/wiki/Key:operational_status) | [string](../SpecialInputElements.md#string) | [](https://wiki.openstreetmap.org/wiki/Tag:operational_status%3D) [broken](https://wiki.openstreetmap.org/wiki/Tag:operational_status%3Dbroken) [closed](https://wiki.openstreetmap.org/wiki/Tag:operational_status%3Dclosed)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/bottle#values) [bottle](https://wiki.openstreetmap.org/wiki/Key:bottle) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:bottle%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:bottle%3Dno)




### images 



_This tagrendering has no question and is thus read-only_





### Still in use? 



The question is **Is this drinking water spot still operational?**

This rendering asks information about the property  [operational_status](https://wiki.openstreetmap.org/wiki/Key:operational_status) 
This is rendered with `The operational status is <i>{operational_status}</i>`



  - **This drinking water works** corresponds with 
  - **This drinking water is broken** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:operational_status' target='_blank'>operational_status</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:operational_status%3Dbroken' target='_blank'>broken</a>
  - **This drinking water is closed** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:operational_status' target='_blank'>operational_status</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:operational_status%3Dclosed' target='_blank'>closed</a>




### Bottle refill 



The question is **How easy is it to fill water bottles?**





  - **It is easy to refill water bottles** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:bottle' target='_blank'>bottle</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:bottle%3Dyes' target='_blank'>yes</a>
  - **Water bottles may not fit** corresponds with <a href='https://wiki.openstreetmap.org/wiki/Key:bottle' target='_blank'>bottle</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:bottle%3Dno' target='_blank'>no</a>




### render-closest-drinking-water 



_This tagrendering has no question and is thus read-only_



Only visible if `_closest_other_drinking_water_id~^..*$` is shown 

This document is autogenerated from [assets/layers/drinking_water/drinking_water.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/drinking_water/drinking_water.json)