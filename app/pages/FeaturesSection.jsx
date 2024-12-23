import { Wand2, Zap, Clock, Share2 } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Platform?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Wand2 className="w-10 h-10" />}
            title="AI-Powered Creation"
            description="Advanced AI algorithms that understand your vision and create stunning videos"
          />
          <FeatureCard
            icon={<Zap className="w-10 h-10" />}
            title="Lightning Fast"
            description="Generate professional videos in minutes, not hours"
          />
          <FeatureCard
            icon={<Clock className="w-10 h-10" />}
            title="Time-Saving"
            description="Automate your video creation workflow and focus on what matters"
          />
          <FeatureCard
            icon={<Share2 className="w-10 h-10" />}
            title="Easy Sharing"
            description="Share your videos instantly across all social platforms"
          />
        </div>
      </div>
    </section>
  );
}
