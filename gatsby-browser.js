import littlefoot from 'littlefoot';
import 'littlefoot/dist/littlefoot.css'

export function onRouteUpdate() {
  littlefoot({
    allowMultiple: true,
    dismissOnUnhover: false,
    hoverDelay: 100,
    preventPageScroll: false
  });
}
