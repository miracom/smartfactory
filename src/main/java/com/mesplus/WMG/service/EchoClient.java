package com.mesplus.WMG.service;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.cometd.bayeux.Message;
import org.cometd.bayeux.client.ClientSession;
import org.cometd.java.annotation.Listener;
import org.cometd.java.annotation.Session;
import org.cometd.java.annotation.Subscription;

public class EchoClient {
    @Session
    private ClientSession session;

    @PostConstruct
    private void init()
    {
    }
    @PreDestroy
    private void destroy()
    {
    }
    @Listener("/meta/*")
    public void handleMetaMessage(Message connect)
    {
    }
    @Subscription("/foo")
    public void handeFoo(Message message)
    {
    }
}