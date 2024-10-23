//React

// ------------
// state controlled animation for nav menu
// ------------
export const rollInOutAnimation = (isVisible: boolean | null) => {
    if ( isVisible == null) {
        return "opacity-0"
    };
    return isVisible ? 'animate-roll-in' : 'animate-roll-out';
};

