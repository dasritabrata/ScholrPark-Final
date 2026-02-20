"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { BookOpen, Users, Brain, Video, ArrowRight } from "lucide-react";

export default function LandingPage() {
  const router = useRouter();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative flex flex-col items-center justify-center px-6 py-32 text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight"
        >
          Empowering The Future of Learning Through Smart Collaboration
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          Our EdTech platform combines real-time collaboration, intelligent
          study groups, interactive chat, and video learning to create the most
          powerful digital classroom experience ever built.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/home")}
          className="mt-10 flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition"
        >
          Get Started <ArrowRight size={18} />
        </motion.button>
      </section>

      {/* ================= VISION ================= */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Our Vision
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-muted-foreground text-lg text-center max-w-3xl mx-auto"
        >
          We believe education should be collaborative, intelligent, and
          accessible. Our platform bridges the gap between traditional
          classrooms and digital innovation by enabling students to connect,
          discuss, learn, and grow together in real time.
        </motion.p>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-muted/40 px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: <Users />,
              title: "Smart Study Groups",
              desc: "Create or join topic-based groups and collaborate in real time with peers worldwide.",
            },
            {
              icon: <Video />,
              title: "Live Video Sessions",
              desc: "Integrated video calling for interactive discussions and online classes.",
            },
            {
              icon: <Brain />,
              title: "AI Learning Assistant",
              desc: "Get intelligent suggestions, summaries, and learning insights powered by AI.",
            },
            {
              icon: <BookOpen />,
              title: "Resource Sharing",
              desc: "Share notes, PDFs, links, and learning materials seamlessly.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-background p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          How It Works
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-3 gap-10">
          {[
            "Create your account and personalize your learning interests.",
            "Join or create collaborative study groups.",
            "Start learning together via chat, video, and AI-powered insights.",
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-muted rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-primary mb-4">
                {i + 1}
              </div>
              <p className="text-muted-foreground">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-primary text-primary-foreground px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          Ready to Transform Your Learning Experience?
        </motion.h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/home")}
          className="mt-10 bg-background text-foreground px-8 py-4 rounded-full font-medium shadow-lg"
        >
          Get Started Today
        </motion.button>
      </section>
    </div>
  );
}
