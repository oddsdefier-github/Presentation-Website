import Highway from '@dogstudio/highway';
import Tween from 'gsap';

//fade
class fade extends Highway.Transition {
    in( {from, to, done} ) {
        from.remove();

        //Animation
        Tween.fromTo( to, 0.5, {opacity: 0 }, {opacity: 1, onComplete: done } ) 
    }
    out ( { from, done}) {
        //Animation
        done();
    }
 }

export default fade;