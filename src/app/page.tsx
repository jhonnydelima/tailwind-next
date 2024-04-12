import { Input } from '@/components/Input'
import { SettingsTabs } from '@/components/SettingsTabs'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { FileInput } from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>

            <Button variant="primary" type="submit" form="personal-info">
              Save
            </Button>
          </div>
        </div>

        <form
          id="personal-info"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>

            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Jhonny" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="Lima" />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              E-mail address
            </label>

            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>

              <Input.Control
                id="email"
                type="email"
                defaultValue="jhonny@gmail.com"
              />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="your-photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <p className="mt-0.5 text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </p>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>

            <Input.Root>
              <Input.Control id="role" defaultValue="Software Engineer" />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>

            <Select placeholder="Select a country...">
              <SelectItem value="br" title="Brazil" />
              <SelectItem value="us" title="United States" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>

            <Select placeholder="Select a timezone...">
              <SelectItem
                value="utc8"
                title="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem value="utc3" title="America São Paulo (UTC-03:00)" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <p className="mt-0.5 text-sm font-normal text-zinc-500">
                Write a short introduction.
              </p>
            </label>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select defaultValue="normal">
                  <SelectItem value="normal" title="Normal Text" />
                  <SelectItem value="md" title="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <p className="mt-0.5 text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </p>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>

            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
