const WINDOW_LOADED_EVENT = 'DOMContentLoaded';

const PARALLAX_CLASS = '.parallax';
const PARALLAX_OPTIONS = {};

const FLOAT_BUTTON_CLASSS = '.fixed-action-btn';
const FLOAT_BUTTON_OPTIONS = {
  direction: 'top',
  hoverEnabled: true,
  toolbarEnabled: false,
};

document.addEventListener(WINDOW_LOADED_EVENT, function() {
  /** Parallax */
  const parallaxElements = document.querySelectorAll(PARALLAX_CLASS);

  M.Parallax.init(
    parallaxElements,
    PARALLAX_OPTIONS
  );

  /** Floating buttons */
  const floatButtonElements = document.querySelectorAll(FLOAT_BUTTON_CLASSS);

  M.FloatingActionButton.init(
    floatButtonElements,
    FLOAT_BUTTON_OPTIONS
  );
});
