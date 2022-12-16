import React from 'react';

const useInitialState = () => {
    const [theme, setTheme] = React.useState(true);

	React.useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme(false);
		} else {
			setTheme(true);
		}
	}, []);

	const handleTheme = () => {
		setTheme(!theme);
	};

	React.useEffect(() => {
		if (theme === false) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

    return {
        theme,
        handleTheme
    }
}

export {useInitialState}
