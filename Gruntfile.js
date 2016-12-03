{
  browserify: {
    dubug: {
      files: { 'build/js/app.js': 'js/apps.js'},
      options: {
        dubug: true
      }
    }
  }
  watch: {
    app: {
      files: 'app/**/*.js',
      tasks: ['browserify']
    }
  }
}
