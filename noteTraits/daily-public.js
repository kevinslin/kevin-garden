
/**
 * Note: you must reload your window after each file change for it to take into
 * effect. We are working to improve this behavior.
 */
module.exports = {
  /**
   * Specify behavior to modify the name of the note. If
   * promptUserForModification is true, the modified name will appear in a
   * lookup control to allow the user to further edit the note name before
   * confirming.
   */
  OnWillCreate: {
    setNameModifier(props) {
      return {
        name: [props.currentNoteName, props.selectedText, props.clipboard].join(','),
        promptUserForModification: true
      };
    }
  },
  /**
   * Specify behavior for altering the title of the note when it is created.
   */
  OnCreate: {
    setTitle(props) {
      return [props.currentNoteName, props.selectedText, props.clipboard].join(',');
    }
  }
}
