self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        // नीचे दिए गए लिंक की जगह अपनी वेबसाइट का असली लिंक डालें
        clients.openWindow('https://apruj.github.io/') 
    );
});
