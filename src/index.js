import * as slide from './sections/slide';
import * as narration from './sections/narration';
import * as video from './sections/video';
import * as audio from './sections/audio';
import * as utils from './utils/utils';

const initListeners = () => {
  $('#textarea-slide').on('change textInput input', utils.throttleInput((e) => {
    const val0 = slide.getStore();
    const val1 = e.target.value;
    if (val0 !== val1) utils.showStatus('edited');
  }));

  $('#textarea-narration').on('change textInput input', utils.throttleInput((e) => {
    const val0 = narration.getStore();
    const val1 = e.target.value;
    if (val0 !== val1) utils.showStatus('edited');
  }));
};

window.initApp = async function() {
  utils.showStatus('loading');

  initListeners();

  slide.initText();
  narration.initText();
  video.draw();
  const p1 = audio._load();

  utils.showAppVersion();

  const status = await p1;
  utils.showStatus(status);
};

window.buildApp = async function() {
  utils.showStatus('loading');

  slide.saveText();
  narration.saveText();
  video.draw();
  const p1 = audio._load();

  const status = await p1;
  utils.showStatus(status);
};

window.resetApp = async function() {
  utils.showStatus('loading');

  slide.resetText();
  narration.resetText();
  video.draw();
  const p1 = audio._load();

  const status = await p1;
  utils.showStatus(status);
};

window.recordApp = function() {
  video.record();
};

window.replayApp = function() {
  video.replay();
};
