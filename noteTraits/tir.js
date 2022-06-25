
/**
 * Define your custom trait behavior in this file by modifying the functions in
 * 'module.exports' below. See
 * https://wiki.dendron.so/notes/EQoaBI8A0ZcswKQC3UMpO/ for examples and
 * documentation.
 *
 * NOTE: This is an alpha feature, so this API may have breaking changes in
 * future releases.
 */

/**
 * @typedef OnCreateContext Properties that can be utilized during note creation
 * @type {object}
 * @property {string} currentNoteName The name of the currently opened Dendron
 * note, or the specified name of the note about to be created
 * @property {string} selectedText Any currently selected text in the editor
 * @property {number} clipboard The current contents of the clipboard
 */

/**
 * @typedef SetNameModifierReturnType Properties that can be utilized during
 * note creation
 * @type {object}
 * @property {string} name The name to use for the note
 * @property {boolean} promptUserForModification if true, the modified name will
 * appear in a lookup control to allow the user to further edit the note name
 * before confirming.
 */

const kebabCase = (string) => string.replace(/[\s_:]+/g, '-').toLowerCase();
module.exports = {
  OnWillCreate: {
    setNameModifier(props) {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      const yyyy = today.getFullYear();
      const fullDateWithDots = `${yyyy}.${mm}.${dd}`
      const namePath = ["tir", "journal", fullDateWithDots, kebabCase(props.clipboard)];
      return {
        name: namePath.join("."),
        promptUserForModification: true
      };
    }
  },
  OnCreate: {
    /**
     * Specify behavior for altering the title of the note when it is created.
     * @param {OnCreateContext} props
     * @returns {string} the title to set for the note
     */
     setTitle(props) {
      return props.clipboard
    },
    /**
     * Set a note template to be applied. This method is optional, if you don't
     * want to apply a template, simply delete this 'setTemplate' property.
     * @returns the name of the desired template note from this function
     */
    setTemplate: () => {
      return "templates.til";
    },
  },
};
