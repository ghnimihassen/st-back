import mongoose from "mongoose";

const rewardSchema = new mongoose.Schema({
  name:              { type: String, required: true },
  description:       { type: String, required: true },
  pointsCost:        { type: Number, required: true, min: 1 },
  type:              { type: String, enum: ["discount", "free_item", "special"], required: true },
  value:             { type: String, required: true },
  image:             { type: String, default: "" },
  isActive:          { type: Boolean, default: true },
  // ── Nouveaux champs ──
  quantity:          { type: Number, default: null },   // null = illimité
  quantity_used:     { type: Number, default: 0 },
  discount_value:    { type: Number, default: null },   // % si type=discount
  free_product_name: { type: String, default: "" },     // nom produit si type=free_item
  is_special:        { type: Boolean, default: false }, // badge spécial sur menu
  special_label:     { type: String, default: "" },     // ex: "🎂 Offre spéciale"
}, { timestamps: true });

export const Reward = mongoose.model("Reward", rewardSchema);