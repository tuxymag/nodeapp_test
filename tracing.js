//OpenTelemetry
const { Resource } = require("@opentelemetry/resources");
const { SemanticResourceAttributes } = require("@opentelemetry/semantic-conventions");
const { SimpleSpanProcessor } = require("@opentelemetry/sdk-trace-base");
const { NodeTracerProvider } = require("@opentelemetry/sdk-trace-node");
const { trace } = require("@opentelemetry/api");
//exporter
const { JaegerExporter } = require("@opentelemetry/exporter-jaeger");
//instrumentations
const { ExpressInstrumentation } = require("opentelemetry-instrumentation-express");
const { HttpInstrumentation } = require("@opentelemetry/instrumentation-http");
const { registerInstrumentations } = require("@opentelemetry/instrumentation");

//Exporter
module.exports = (serviceName) => {
 const exporter = new JaegerExporter({
   endpoint: "http://192.168.1.103:14268/api/traces",
 });
 const provider = new NodeTracerProvider({
   resource: new Resource({
     [SemanticResourceAttributes.SERVICE_NAME]: serviceName,
   }),
 });
 provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
 provider.register();
 registerInstrumentations({
   instrumentations: [
     new HttpInstrumentation(),
     new ExpressInstrumentation()
     
   ],
   tracerProvider: provider,
 });
 return trace.getTracer(serviceName);
};
