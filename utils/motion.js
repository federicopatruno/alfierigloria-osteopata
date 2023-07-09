
export const fadeInStaggered = (direction, type, duration) => ({
    closed: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
    },
    open: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            duration,
            ease: 'easeOut',
        },
    },
});

export const sideMenuVariants = {
    closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1,
            when: "afterChildren",
        }
    },
    open: {
        transition: {
            staggerChildren: 0.33,
            staggerDirection: 1,
            delayChildren: .1,
            when: "beforeChildren",
        }
    }
};

export const hamburger = (position, margin) => ({
    closed: {
        rotate: 0,
        y: 0
    },
    open: {
        rotate: position === "bottom" ? -45 : position === "top" ? 45 : 0,
        y: position === "bottom" ? (margin * -1) : position === "top" ? margin : 0,
    }
})

export const menuVariants = {
    closed: {
        right: '-100%',
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1,
            when: "afterChildren",
        }

    },
    open: {
        right: '0%',
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1,
            when: "beforeChildren",
        }
    },
}

export const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

export const slideIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
        y: direction === 'up' ? '-100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
        x: 0,
        y: 0,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

export const zoomIn = (delay, duration) => ({
    hidden: {
        scale: 0,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'tween',
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

export const zoomOut = (delay, duration) => ({
    hidden: {
        scale: 2,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'tween',
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

export const footerVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            delay: 0.5,
        },
    },
};
