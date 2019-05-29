import {
  changePolygonPointsPropertiesToDefault, removePolygonPoints,
  cleanPolygonPointsArray, clearAllAddPointsData,
} from '../../../objects/polygon/alterPolygon/alterPolygon';
import { clearPolygonData } from '../../../objects/polygon/polygon';
import { cancelLabellingProcess } from '../../../../tools/labellerPopUp/buttonsEvents';
import { removeEditedPolygonId } from '../eventWorkers/editPolygonEventsWorker';
import {
  getAlteringPolygonPointsState, setAlteringPolygonPointsState,
  getRemovingPolygonPointsState, getAddingPolygonPointsState,
} from '../../../../tools/toolkit/buttonEvents/facadeWorkersUtils/stateManager';

function interruptCanvasEventsNoPolygonPointRemoval() {
  clearPolygonData();
  cancelLabellingProcess();
  removeEditedPolygonId();
  if (getAlteringPolygonPointsState()) {
    if (getRemovingPolygonPointsState()) {
      cleanPolygonPointsArray();
    }
    if (getAddingPolygonPointsState()) {
      // check when exactly is this being called
      // after removing and moving points add doesn't add new points to longest
      clearAllAddPointsData();
    }
    changePolygonPointsPropertiesToDefault();
    setAlteringPolygonPointsState(false);
  }
}

function interruptAllCanvasEvents() {
  removePolygonPoints();
  interruptCanvasEventsNoPolygonPointRemoval();
}

function interruptCanvasToStartAddPoints() {
  if (!getAddingPolygonPointsState()) {
    interruptCanvasEventsNoPolygonPointRemoval();
  }
}

export { interruptCanvasToStartAddPoints, interruptAllCanvasEvents };
