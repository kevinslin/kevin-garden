
/**
 * Note: you must reload your window after each file change for it to take into
 * effect. We are working to improve this behavior.
 */
const kebabCase = (string) => string.replace(/[\s_:]+/g, '-').toLowerCase();
module.exports = {
  /**
   * Specify behavior to modify the name of the note. If
   * promptUserForModification is true, the modified name will appear in a
   * lookup control to allow the user to further edit the note name before
   * confirming.
   */
  OnWillCreate: {
    setNameModifier(props) {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      const yyyy = today.getFullYear();
      const fullDateWithDots = `${yyyy}.${mm}.${dd}`
      const namePath = ["til", "journal", fullDateWithDots, kebabCase(props.clipboard)];
      return {
        name: namePath.join("."),
        promptUserForModification: true
      };
    }
  },
  /**
   * Specify behavior for altering the title of the note when it is created.
   */
  OnCreate: {
    setTitle(props) {
      return props.clipboard
    }
  }
}
