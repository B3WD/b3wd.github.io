function injectComponentDependencies(...srcPaths) {
    srcPaths.forEach(srcPath => {
        if (!document.querySelector(`script[src="${srcPath}"]`)) {
            const script = document.createElement('script');
            script.src = srcPath;
            script.type = 'module';
            document.head.appendChild(script);
        }
    });
}

export { injectComponentDependencies };