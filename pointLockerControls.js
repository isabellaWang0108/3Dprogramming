var _____WB$wombat$assign$function_____ = function (name) { return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function (obj) { this.__WB_source = obj; return this; } }
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    (function () {
        const _euler = new THREE.Euler(0, 0, 0, 'YXZ');

        const _vector = new THREE.Vector3();

        const _changeEvent = {
            type: 'change'
        };
        const _lockEvent = {
            type: 'lock'
        };
        const _unlockEvent = {
            type: 'unlock'
        };

        const _PI_2 = Math.PI / 2;

        class PointerLockControls extends THREE.EventDispatcher {

            constructor(camera, domElement) {

                super();

                if (domElement === undefined) {

                    console.warn('THREE.PointerLockControls: The second parameter "domElement" is now mandatory.');
                    domElement = document.body;

                }

                this.domElement = domElement;
                this.isLocked = false; // Set to constrain the pitch of the camera
                // Range is 0 to Math.PI radians

                this.minPolarAngle = 0; // radians

                this.maxPolarAngle = Math.PI; // radians

                const scope = this;

                function onMouseMove(event) {

                    if (scope.isLocked === false) return;
                    const movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
                    const movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

                    _euler.setFromQuaternion(camera.quaternion);

                    _euler.y -= movementX * 0.002;
                    _euler.x -= movementY * 0.002;
                    _euler.x = Math.max(_PI_2 - scope.maxPolarAngle, Math.min(_PI_2 - scope.minPolarAngle, _euler.x));
                    camera.quaternion.setFromEuler(_euler);
                    scope.dispatchEvent(_changeEvent);

                }

                function onPointerlockChange() {

                    if (scope.domElement.ownerDocument.pointerLockElement === scope.domElement) {

                        scope.dispatchEvent(_lockEvent);
                        scope.isLocked = true;

                    } else {

                        scope.dispatchEvent(_unlockEvent);
                        scope.isLocked = false;

                    }

                }

                function onPointerlockError() {

                    console.error('THREE.PointerLockControls: Unable to use Pointer Lock API');

                }

                this.connect = function () {

                    scope.domElement.ownerDocument.addEventListener('mousemove', onMouseMove);
                    scope.domElement.ownerDocument.addEventListener('pointerlockchange', onPointerlockChange);
                    scope.domElement.ownerDocument.addEventListener('pointerlockerror', onPointerlockError);

                };

                this.disconnect = function () {

                    scope.domElement.ownerDocument.removeEventListener('mousemove', onMouseMove);
                    scope.domElement.ownerDocument.removeEventListener('pointerlockchange', onPointerlockChange);
                    scope.domElement.ownerDocument.removeEventListener('pointerlockerror', onPointerlockError);

                };

                this.dispose = function () {

                    this.disconnect();

                };

                this.getObject = function () {

                    // retaining this method for backward compatibility
                    return camera;

                };

                this.getDirection = function () {

                    const direction = new THREE.Vector3(0, 0, - 1);
                    return function (v) {

                        return v.copy(direction).applyQuaternion(camera.quaternion);

                    };

                }();

                this.moveForward = function (distance) {

                    // move forward parallel to the xz-plane
                    // assumes camera.up is y-up
                    _vector.setFromMatrixColumn(camera.matrix, 0);

                    _vector.crossVectors(camera.up, _vector);

                    camera.position.addScaledVector(_vector, distance);

                };

                this.moveRight = function (distance) {

                    _vector.setFromMatrixColumn(camera.matrix, 0);

                    camera.position.addScaledVector(_vector, distance);

                };

                this.lock = function () {

                    this.domElement.requestPointerLock();

                };

                this.unlock = function () {

                    scope.domElement.ownerDocument.exitPointerLock();

                };

                this.connect();
            }

        }

        THREE.PointerLockControls = PointerLockControls;
    })();


}
/*
     FILE ARCHIVED ON 00:56:33 Jun 02, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:56:45 Oct 04, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 787.561
  exclusion.robots: 0.209
  exclusion.robots.policy: 0.193
  cdx.remote: 0.121
  esindex: 0.015
  LoadShardBlock: 37.679 (3)
  PetaboxLoader3.datanode: 39.327 (4)
  CDXLines.iter: 20.478 (3)
  load_resource: 41.784
  PetaboxLoader3.resolve: 24.507
*/