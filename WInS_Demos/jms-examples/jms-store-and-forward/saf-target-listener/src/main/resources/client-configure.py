connect('weblogic','welcome1','t3://wins-vbox:7001')
edit()
startEdit()

cmo.createJMSSystemResource('jms-module-saf')

cd('/SystemResources/jms-module-saf')
set('Targets',jarray.array([ObjectName('com.bea:Name=cluster-1,Type=Cluster')], ObjectName))

cd('/JMSSystemResources/jms-module-saf/JMSResource/jms-module-saf')
cmo.createConnectionFactory('com/oracle/examplejms/saf/cf')

cd('/JMSSystemResources/jms-module-saf/JMSResource/jms-module-saf/ConnectionFactories/com/oracle/examplejms/saf/cf')
cmo.setJNDIName('com/oracle/examplejms/saf/cf')

cd('/JMSSystemResources/jms-module-saf/JMSResource/jms-module-saf/ConnectionFactories/com/oracle/examplejms/saf/cf/SecurityParams/com/oracle/examplejms/saf/cf')
cmo.setAttachJMSXUserId(false)

cd('/JMSSystemResources/jms-module-saf/JMSResource/jms-module-saf/ConnectionFactories/com/oracle/examplejms/saf/cf/ClientParams/com/oracle/examplejms/saf/cf')
cmo.setClientIdPolicy('Restricted')
cmo.setSubscriptionSharingPolicy('Exclusive')
cmo.setMessagesMaximum(10)

cd('/JMSSystemResources/jms-module-saf/JMSResource/jms-module-saf/ConnectionFactories/com/oracle/examplejms/saf/cf/TransactionParams/com/oracle/examplejms/saf/cf')
cmo.setXAConnectionFactoryEnabled(true)

cd('/JMSSystemResources/jms-module-saf/JMSResource/jms-module-saf/ConnectionFactories/com/oracle/examplejms/saf/cf')
cmo.setDefaultTargetingEnabled(true)

cd('/JMSSystemResources/jms-module-saf/JMSResource/jms-module-saf')
cmo.createUniformDistributedQueue('com/oracle/examplejms/saf/queue')

cd('/JMSSystemResources/jms-module-saf/JMSResource/jms-module-saf/UniformDistributedQueues/com/oracle/examplejms/saf/queue')
cmo.setJNDIName('com/oracle/examplejms/saf/queue')
cmo.unSet('Template')
cmo.setLoadBalancingPolicy('Round-Robin')
cmo.setResetDeliveryCountOnForward(true)
cmo.setIncompleteWorkExpirationTime(-1)
cmo.setForwardDelay(-1)
cmo.setAttachSender('supports')
cmo.setSAFExportPolicy('All')
cmo.setProductionPausedAtStartup(false)
cmo.setDefaultUnitOfOrder(false)
cmo.setDefaultTargetingEnabled(false)
cmo.setUnitOfOrderRouting('Hash')
cmo.setUnitOfWorkHandlingPolicy('PassThrough')
cmo.setInsertionPausedAtStartup(false)
cmo.setMessagingPerformancePreference(25)
cmo.setConsumptionPausedAtStartup(false)

cd('/JMSSystemResources/jms-module-saf/JMSResource/jms-module-saf')
cmo.createUniformDistributedQueue('com/oracle/examplejms/saf/queue-invalid')

cd('/JMSSystemResources/jms-module-saf/JMSResource/jms-module-saf/UniformDistributedQueues/com/oracle/examplejms/saf/queue-invalid')
cmo.setJNDIName('com/oracle/examplejms/saf/queue-invalid')
cmo.setDefaultTargetingEnabled(true)
cmo.unSet('Template')
cmo.setLoadBalancingPolicy('Round-Robin')
cmo.setResetDeliveryCountOnForward(true)
cmo.setIncompleteWorkExpirationTime(-1)
cmo.setForwardDelay(-1)
cmo.setAttachSender('supports')
cmo.setSAFExportPolicy('None')
cmo.setProductionPausedAtStartup(false)
cmo.setDefaultUnitOfOrder(false)
cmo.setUnitOfOrderRouting('Hash')
cmo.setUnitOfWorkHandlingPolicy('PassThrough')
cmo.setInsertionPausedAtStartup(false)
cmo.setMessagingPerformancePreference(25)
cmo.setConsumptionPausedAtStartup(false)

cd('/JMSSystemResources/jms-module-saf/JMSResource/jms-module-saf/ConnectionFactories/com/oracle/examplejms/saf/cf/LoadBalancingParams/com/oracle/examplejms/saf/cf')
cmo.setLoadBalancingEnabled(true)
cmo.setServerAffinityEnabled(false)

save()
activate(block="true")
disconnect()
exit()
